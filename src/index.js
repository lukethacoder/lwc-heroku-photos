import { buildCustomElementConstructor } from 'lwc';
import LsdApp from 'lsd/app';

customElements.define('lsd-app', buildCustomElementConstructor(LsdApp));
