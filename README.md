## Setup Instructions

1. Install correct version of NodeJS using NVM

On Linux/Mac:

- Install [nvm](https://github.com/nvm-sh/nvm#install--update-script)
- Run `nvm use`

On Windows:

- Install [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades) for windows (don't uninstall the your current version of node just click on manage with nvm when popup shows while installing nvm)
- Run `nvm use $(cat .nvmrc)`

Or any Node version above 16.x will work (we recommend 18.x)

2. generate the Relay filies and build the project

   ```bash
    npm run relay
    npm run build
   ```

3. setup the REACT_APP_GITHUB_AUTH_TOKEN ( NOTE: this is temporary untill the login part is built )
   create your own persoanl github access token as described here : https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
   create a .env file from the .env.example file provided and add your personal access token to the REACT_APP_GITHUB_AUTH_TOKEN="your personal access token here" line

4. Running local server in dev mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the dashboard.
