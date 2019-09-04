import { LightningElement, track } from 'lwc';
import { client, CREATE_PHOTO_MUTATION } from 'lsd/api';
import { uuidv4 } from '../helpers/helpers';

export default class addNewImage extends LightningElement {
    @track name = 'Test Image ' + uuidv4();
    @track file_url = '';
    @track lon = '-35.2778169';
    @track lat = '149.1316294';
    @track date_taken = '2019-09-01';

    async connectedCallback() {
        await fetch(
            'https://source.unsplash.com/collection/1158549/1920x1080'
        ).then(data => (this.file_url = data.url));
    }

    handleFieldChange(e) {
        this[e.currentTarget.name] = e.target.value;
    }

    saveImage = async e => {
        e.preventDefault();

        const mutationOptions = {
            mutation: CREATE_PHOTO_MUTATION,
            variables: {
                heroku_id: uuidv4(),
                file_location: this.file_url,
                name: this.name
            }
        };
        this.error = false;
        this.loading = true;
        try {
            await client.mutate(mutationOptions);
            this.name = '';
            this.file_url = '';
            this.lon = '';
            this.lat = '';
            this.date_taken = '';
            this.valid = false;
        } catch (err) {
            this.error = true;
        }
        this.loading = false;
    };
}
