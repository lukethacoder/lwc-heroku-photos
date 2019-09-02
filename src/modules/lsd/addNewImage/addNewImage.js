import { LightningElement } from 'lwc';

export default class addNewImage extends LightningElement {
    name = '';
    file_url = '';
    lon = '';
    lat = '';
    date_taken = '';

    handleFieldChange(e) {
        this[e.currentTarget.name] = e.target.value;
    }

    saveImage() {
        // TODO: handle push to db here
        this.name = '';
        this.file_url = '';
        this.lon = '';
        this.lat = '';
        this.date_taken = '';
    }
}
