import { LightningElement, track } from 'lwc';
import { client, ALL_PHOTOS_QUERY } from 'lsd/api';

export default class Image extends LightningElement {
    // @track images = staticImages;
    @track error = false;
    @track loading = false;
    subscription;
    @track images = [];

    async connectedCallback() {
        const queryOptions = {
            query: ALL_PHOTOS_QUERY
        };
        const observable = client.watchQuery(queryOptions);
        this.subscription = observable.subscribe(
            this.observableNextCallback,
            this.observableErrorCallback,
            this.observableCompleteCallback
        );
        this.loading = true;
        try {
            await client.query(queryOptions);
            this.loading = false;
        } catch (err) {
            this.loading = false;
        }
    }

    disconnectedCallback() {
        this.subscription.unsubscribe();
    }

    observableNextCallback = res => {
        this.photos = res.data.salesforce_photo__c;
        this.error = false;
    };

    observableErrorCallback = err => {
        if (!err) return;
        this.error = true;
    };

    observableCompleteCallback = () => {
        window.console.log('Finished');
    };
}
