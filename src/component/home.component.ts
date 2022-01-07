import {VComponent} from "vienna-ts";

@VComponent({
    selector: 'home-component',
    styles: [],
    html: `<span>{{ message }}</span>`
})
export class HomeComponent {
    message = 'Hello from HomeComponent!';
}