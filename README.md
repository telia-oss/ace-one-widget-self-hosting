# ACE Knowledge Self Hosting

A standalone ACE Knowledge cloud distribution setup.

# Running and building

Commands should be ran from the folder root.
Distribution files will be produced in the dist folder.

## Local development server

1. `npm install`
2. `npm run start`

## Production build

1. `npm install`
2. `npm run build-prod`

## Development build

1. `npm install`
2. `npm run build-dev`

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
