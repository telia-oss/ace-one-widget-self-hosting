# ACE Knowledge Self Hosting

A standalone ACE Knowledge cloud distribution setup.

# Running and building

Commands should be ran from the folder root.
Distribution files will be produced in the dist folder.

## Local development server

1. `yarn` or `npm install`
2. `yarn start` or `npm run start`

## Production build

1. `yarn` or `npm install`
2. `yarn build-prod` or `npm run build-prod`

## Development build

1. `yarn` or `npm install`
2. `yarn build-dev` or `npm run build-dev`

# Configuration

## Changing tenant

1. Go to `index.js`.
2. Change tenant name.

```diff
- const tenantName = 'webprovisions';
+ const tenantName = 'another-tenant';
```

## Adding implementation(s)

1. Go to `index.js`.
2. Add implementation names.

```diff
- const implementationNames = ['default'];
+ const implementationNames = ['default', 'another-implementation'];
```

## Changing widgets(s)

1. Go to `public/index.html`.
2. Change trigger link

```diff
- <a href="https://webprovisions.humany.net/self-hosting-example"/>
+ <a href="https://<my-tenant-name>.humany.net/<my-widget-name>"/>
```
