import { HttpStatus, INestApplication } from '@nestjs/common'
import { HealthCheckError, HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus'
import { HealthCheckExecutor } from '@nestjs/terminus/dist/health-check/health-check-executor.service'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import HealthController from '../../../src/api/health/health.controller'

const HEALTH_URL = '/health'

interface DatabaseHealthIndicator {
  pingCheck: unknown
}
const databaseUpHealthIndicator: DatabaseHealthIndicator = {
  pingCheck: () => ({ up: { status: 'up' } }),
}

const databaseDownHealthIndicator: DatabaseHealthIndicator = {
  pingCheck: () => {
    throw new HealthCheckError('Down', { down: { status: 'down' } })
  },
}

async function checkHealth({
  app,
  expectedStatusCode = HttpStatus.OK,
}: {
  app: INestApplication
  expectedStatusCode?: HttpStatus
}) {
  const { body } = await request(app.getHttpServer()).get(HEALTH_URL).expect(expectedStatusCode)

  return body
}

const appTestFactory = async (
  databaseHealthIndicator: DatabaseHealthIndicator = databaseUpHealthIndicator
) => {
  const moduleFixture = await Test.createTestingModule({
    controllers: [HealthController],
    providers: [
      HealthCheckExecutor,
      HealthCheckService,
      {
        provide: TypeOrmHealthIndicator,
        useValue: databaseHealthIndicator,
      },
    ],
  }).compile()

  moduleFixture.useLogger({ error: jest.fn(), log: jest.fn(), warn: jest.fn(), debug: jest.fn() })

  const app = moduleFixture.createNestApplication()

  await app.init()
  return app
}
describe('HealthController (e2e)', () => {
  describe(`${HEALTH_URL} (GET)`, () => {
    it('returns ok health status', async () => {
      const app = await appTestFactory()

      const health = await checkHealth({ app })
      expect(health).toMatchSnapshot()
    })

    it('returns ko health status', async () => {
      const app = await appTestFactory(databaseDownHealthIndicator)

      const health = await checkHealth({ app, expectedStatusCode: HttpStatus.SERVICE_UNAVAILABLE })
      expect(health).toMatchSnapshot()
    })
  })
})
