import { Module } from '@nestjs/common'
import OrmSwitcherModule from '../../database/orm-switcher.module'
import AppConfig from '../app.config'
import HealthModule from './health/health.module'

@Module({
  imports: [
    HealthModule,
    OrmSwitcherModule.init({
      disable: AppConfig.testModeEnabled && !AppConfig.forceEnableORMRepositories,
    }),
  ],
  controllers: [],
})
export default class ApiModule {}
