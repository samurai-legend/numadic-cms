# Numadic CMS

content manager for Next.js Frontend website

## Installation
```
npm install
or
yarn install
```

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build

```

## Environment variables
### `Local Example`
#### Alter based on server requirenments for production.
```
HOST=0.0.0.0
PORT=8082
APP_KEYS=ROvDC/LXwukvzU90vfYWqw==,Dv86bw/qJYL5E5bXAutm+g==,ezIjuvsFvdx1VbJsNzNJwQ==,8W8BTN8dRhXljGbqlvScFQ==
JWT_SECRET=e300b40c-8d94-409b-8bdc-57351da090af
API_TOKEN_SALT=934b9da9e1a6acb158910242d89a6210
```
| Name                           | Required (yes/no) | Default value         | Description                                                  |     |
| ------------------------------ | ----------------- | --------------------- | ------------------------------------------------------------ | --- |
| APP_KEYS                       | yes               | ROvDC/LXwukvzU90vfYWqw==,Dv86bw/qJYL5E5bXAutm+g==,ezIjuvsFvdx1VbJsNzNJwQ==,8W8BTN8dRhXljGbqlvScFQ== | Random App Keys | 
## ⚙️ Deployment

### `production build`
##### Before running your server in production you need to build your admin panel for production

```
NODE_ENV=production npm run build
```

Run the server with the production settings.
```
NODE_ENV=production npm run start
```

 
## License
[MIT](https://choosealicense.com/licenses/mit/)
