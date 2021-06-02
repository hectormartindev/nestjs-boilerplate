import { Connection, EntitySchema, Repository } from 'typeorm'

/* eslint-disable */
// @ts-ignore
export default class FakeDatabaseConnection implements Connection {
  readonly isConnected = true

  async close(): Promise<void> {}

  async connect(): Promise<this> {
    return this
  }

  getRepository<Entity>(target: EntitySchema<Entity>): Repository<Entity> {
    return null as any
  }
}
