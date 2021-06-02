import { Module } from '@nestjs/common'
import databaseConnectionProviderPostgres from './database-connection.provider.postgres'

@Module({
  providers: [databaseConnectionProviderPostgres],
  exports: [databaseConnectionProviderPostgres],
})
export default class DatabaseConnectionModule {}
