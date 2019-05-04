import Route from '@ember/routing/route';

export default class RentalsRoute extends Route {
    model () {
        return this.store.findAll('rental')
    }
}
