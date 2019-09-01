import { LightningElement, track } from 'lwc';

const staticImages = [
    {
        id: 'Hello',
        url:
            'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 'Bonjour',
        url:
            'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 'Ciao',
        url:
            'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }
];

export default class Image extends LightningElement {
    @track images = staticImages;
}
