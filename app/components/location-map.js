import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LocationMapComponent extends Component {
    @service mapElement;
    @tracked element;
    @tracked didRender = false;

    constructor () {
        super(...arguments);
    }

    @action
    readyForMap (element) {
        
        this.mapElement
            .getMapElement(this.args.location)
            .then((map) => element.append(map));
    }
}
