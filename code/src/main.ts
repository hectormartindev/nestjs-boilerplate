import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import morgan, { Options } from 'morgan'
import ApiModule from './api/api.module'
import AppConfig from './app.config'
import DomainErrorFilter from './shared/infrastructure/filters/domain-error.filter'

async function bootstrap() {
  const app = await NestFactory.create(ApiModule)

  // Add Morgan for HTTP Logging
  app.use(
    morgan('combined', { skip: (req: Request) => req.url === '/health' } as Options<never, never>)
  )

  // Add data validation and excepcion filters
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new DomainErrorFilter())

  // Auto generated API documentation!!!
  const documentBuilder = new DocumentBuilder()
    .setTitle('nest boilerplate v1')
    .setDescription('Nest boilerplate')
    .setVersion('1.0')
    .addBearerAuth()
  const options = documentBuilder.build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)
  // Just run 'npm run start' and visit http://localhost:8080/docs
  // To generate and download a Swagger JSON file, go to http://localhost:8080/docs-json

  await app.listen(AppConfig.listeningPort)
}
bootstrap()
