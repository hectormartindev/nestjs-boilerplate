import { Module } from '@nestjs/common'
import DatabaseConnectionModule from '../shared/infrastructure/database/relational/database-connection.module'

@Module({
  imports: [DatabaseConnectionModule],
  controllers: [],
})
export default class ApiModule {}
