import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'
import { TypeOrmModule } from '@nestjs/typeorm'
import ormConfig from '../../orm.config'
import HealthController from './health.controller'

@Module({
  imports: [TerminusModule, TypeOrmModule.forRoot(ormConfig)],
  controllers: [HealthController],
})
export default class HealthModule {}
