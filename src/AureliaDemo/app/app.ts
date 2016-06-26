import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia Demo';
        config.map([
            { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'Home' },
            { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' }
        ]);

        this.router = router;
    }
}