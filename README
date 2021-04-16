# POC : Microfrontends in Angular using WebComponents with @angular/elements 

The proof of concept consists of 3 microfrontends:
- Toolbar: a single angular material header
- Widget: a single angular material table
- Container: the app that is consuming the others 2 microfrontends
- Shell: just a plain index.html consuming the container microfrontend
## Run

Just navigate to each root project folder and execute:

|                |Command                        |Port                         |
|----------------|-------------------------------|-----------------------------|
|/container		 |npm i && npm start             |8080            			   |
|/widget         |npm i && npm start             |8081            			   |
|/toolbar        |npm i && npm start			 |8082						   |

## Communication between microfrontends

We are making use of Angular Extensions Elements Library (https://angular-extensions.github.io/elements/#/home) for lazy loading each web component in the container.