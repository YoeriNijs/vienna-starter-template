import {VApplication} from "vienna-ts";
import {HomeComponent} from "./component/home.component";

@VApplication({
    declarations: [
        HomeComponent
    ],
    routes: [
        { path: '/', component: HomeComponent }
    ]
})
export class Application {}

// Initialize app
new Application();