# DDD Melbourne Website

The DDD Melbourne website is deployed to https://dddmelbourne.com and is built using [Next.js](https://github.com/zeit/next.js/).

## Getting started

- Checkout repository on your machine - ensure you have [Node.js](https://nodejs.org/) installed
- Run `npm install` in the repository root (to restore npm packages)
- Run `npm run dev` to start a local dev environment that watches for changes and supports Hot Module Replacement / Hot Reloading
- Use Visual Studio Code as the preferred dev environment - breakpoint debugging should work and you should be able to run the "Start Dev Webserver" task to get it to run the dev environment
- Note: `package.json` has some URLs defined in the `dev` task that reference the [backend API](https://github.com/dddwa/ddd-backend)

## Building the code for prod release

- Checkout code
- Run `npm`
- Run `npm run build`
- Grab the `.next` directory and deploy to the destination
- Run `npm` in the deploy folder and deploy all files from there alongside the `.next` directory (the web.config file is targeted towards Azure Web Apps)

## Deployment

Watch [this video](https://drive.google.com/file/d/1jyKoGBPxvpw0vb2ZxhZavITTwK8_9Xm5/view) on how to deploy a new version.

## Code organisation

- `/` - Usual array of .json and other config files for a JavaScript / TypeScript project
  - `/.vscode` - VS Code config files including tasks, launch/debugging settings and extension recommendations
  - `/components` - Reusable UI components used within pages
    - `/components/global` - UI components that make up the global layout of the site
    - `/components/utils` - Utility functions
  - `/config` - Configuration of the conference-specific data
  - `/deploy` - Files used to deploy the app to Azure Web Apps
  - `/layouts` - Page layouts
  - `/pages` - The pages themselves, these turn into URLs as per Next.js convention
  - `/static` - Static assets

## Re-purposing for another conference

To re-purpose for another conference:

1.  Update the files in the `config` directory
2.  The theme of the site is handled in theme.ts and uses an 8px margin system
3.  Components are styled using Emotion js styled components. Update styles within the component
4.  Update the images in the `public` directory and sub directories
5.  Update `pages/about.tsx`, `pages/sponsorship.tsx`, `pages/cfp.tsx` and `pages/agenda/*.tsx` with content specific to your conference

If you want to make tweaks to the pages then inspect the files in the `pages` directory and modify from there.

## Tests

### Run tests

- Use the command `npm test`

### Watch tests

- Run the command `npm run test:watch`

### VScode debug

- In VSCode run `Debug Jest Tests` to run all tests in debug
- Alternatively run `Debug Jest Current File` to debug the current file

### Node debug

- Run `npm run test:debug` and attach to the node inspector with your preferred method

## Contributing

So you’re thinking about contributing to the project? You are awesome! It’s **massively** appreciated. Before getting started, please take the time to review the [contribution guidelines](CONTRIBUTING.MD) before sending that epic pull request / bug report.
