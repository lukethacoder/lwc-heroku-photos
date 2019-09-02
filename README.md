# lwc-heroku-photos

Here will be some information about the app.

## How to start?

Start simple by running `yarn watch` (or `npm run watch`, if you set up the project with `npm`). This will start the project with a local development server.

The source files are located in the [`src`](./src) folder. All web components are within the [`src/modules`](./src/modules) folder. The folder hierarchy also represents the naming structure of the web components.

Find more information on the main repo on [GitHub](https://github.com/muenzpraeger/lwc-create-app).

## Heroku / Hasura

The backend postgres database is setup first using [Hasura](https://hasura.io/), and then hooked into Heroku Connect.

This allows for a graphql-esque database, whilst still taking advantage of Heroku Connect sync with salesforce.

## API & Endpoints

All graphql/api/endpoints code can be found under `~/api`. Add your own schema here and adjust the references in the other components.
