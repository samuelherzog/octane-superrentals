import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object'

export default class ListFilterComponent extends Component {
    @tracked results = [];
    @tracked value = '';

    constructor () {
        super(...arguments);
        this.args.filter('')
            .then((allResults) => this.results = allResults.results)
            ;
    }

    @action
    handleFilterEntry (filterInputValue) {
        this.value = filterInputValue;
        let filterAction = this.args.filter;

        filterAction(filterInputValue)
            .then((filterResults) => {
                if (filterResults.query === this.value) {
                    this.results = filterResults.results;                    
                }   
            });
    }
}
