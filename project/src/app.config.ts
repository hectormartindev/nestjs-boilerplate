// Please keep this alphabetically ordered.
const AppConfig = {
  db: {
    postgres: {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'develop',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'develop',
    },
  },
  deployEnvironment: process.env.DEPLOY_ENV || 'dev',
  listeningPort: parseInt(process.env.APP_PORT || '8080', 10),
}

export default AppConfig
