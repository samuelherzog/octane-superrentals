import Service from '@ember/service';
import { camelize } from '@ember/string';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class MapElementService extends Service {
    @service geocode;
    @service map;

    @tracked cachedMaps = {};

    constructor () {
        super(...arguments);
    }

    async getMapElement (location) {
        
        let camelizedLocation = camelize(location);
        let element = this.cachedMaps[camelizedLocation];

        if (!element) {
            element = this.createMapElement();
            let geocodedLocation = await this.geocode.fetchCoordinates(location);
            this.map.createMap(element, geocodedLocation);
            this.cachedMaps[camelizedLocation] = element;
        }
        return element;
    }

    createMapElement () {
        let element = document.createElement('div');
        element.className = 'map';
        return element;
    }
}
