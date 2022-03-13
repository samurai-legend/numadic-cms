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

| Name                           | Required (yes/no) | Default value         | Description                                                  |     |
| ------------------------------ | ----------------- | --------------------- | ------------------------------------------------------------ | --- |
| APP_KEYS                       | yes               | ROvDC/LXwukvzU90vfYWqw==,Dv86bw/qJYL5E5bXAutm+g==,ezIjuvsFvdx1VbJsNzNJwQ==,8W8BTN8dRhXljGbqlvScFQ== | Random App Keys |
| HOST                           | yes               | 0.0.0.0               | server local host address |
| PORT                           | yes               | 8082                  |           |
| JWT_SECRET                     | yes               | e300b40c-8d94-409b-8bdc-57351da090af |  |
| API_TOKEN_SALT                 | yes               | 934b9da9e1a6acb158910242d89a6210 | |
| DATABASE_HOST                  | yes               | 127.0.0.1 | |
| DATABASE_PORT                  | yes               | 5432      | |
| DATABASE_NAME                  | yes               | numadic-cms | |
| DATABASE_USERNAME              | yes               | root      | |
| DATABASE_PASSWORD              | yes               | root      | |
| DATABASE_SSL                   | no                | false     | Make true if connection is SSL |
| AWS_ACCESS_KEY_ID              | yes                |    | aws-key |
| AWS_ACCESS_SECRET              | yes                |    | aws-secret |
| AWS_REGION                     | yes                |    | aws-region |
| AWS_BUCKET_NAME                | yes                |    | aws-s3-bucket |
| AWS_BASE_URL                   | yes                |    | aws-s3-domain access URL ending with trailing "https://example.s3.ap-south-1.amazonaws.com/" |

##### database used is PostgresSQL, please create database with collations utf8_unicode_ci

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
