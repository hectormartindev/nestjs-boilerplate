import { Module } from '@nestjs/common'
import DatabaseConnectionModule from '../shared/infrastructure/database/relational/database-connection.module'
import HealthModule from './health/health.module'

@Module({
  imports: [DatabaseConnectionModule, HealthModule],
  controllers: [],
})
export default class ApiModule {}
