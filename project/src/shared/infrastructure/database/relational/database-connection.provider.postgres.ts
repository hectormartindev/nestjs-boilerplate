import { Connection, createConnection } from 'typeorm'
import connectionOptions from '../../../../../database/orm.config'

const databaseConnectionProviderPostgres = {
  provide: 'DATABASE_CONNECTION',
  useFactory: (): Promise<Connection> => createConnection(connectionOptions),
}

export default databaseConnectionProviderPostgres
