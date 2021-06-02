import { Provider } from '@nestjs/common'
import { getRepositoryToken } from '@nestjs/typeorm'
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type'
import { Connection } from 'typeorm'

const repositoryFactoryFor = (entity: EntityClassOrSchema) => (connection: Connection) =>
  connection.getRepository(entity)

const typeORMRepositoryFor = (entity: EntityClassOrSchema): Provider => ({
  provide: getRepositoryToken(entity),
  useFactory: repositoryFactoryFor(entity),
  inject: ['DATABASE_CONNECTION'],
})

export default typeORMRepositoryFor
