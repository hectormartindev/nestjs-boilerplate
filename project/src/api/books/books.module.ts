import { Module } from '@nestjs/common'
import AppProviders from '../../app.providers'
import AddBook from '../../books/application/add-book.usecase'
import BookEntityPostgres from '../../books/infrastructure/entities/book.entity.postgres'
import BookRepositoryPostgres from '../../books/infrastructure/repositories/book.repository.postgres'
import DatabaseConnectionModule from '../../shared/infrastructure/database/relational/database-connection.module'
import typeORMRepositoryFor from '../../shared/infrastructure/database/relational/typeorm-repository-for.util'
import BooksController from './books.controller'

const useCases = [AddBook]

@Module({
  controllers: [BooksController],
  imports: [DatabaseConnectionModule],
  providers: [
    typeORMRepositoryFor(BookEntityPostgres),
    {
      provide: AppProviders.BOOK_REPOSITORY,
      useClass: BookRepositoryPostgres,
    },
    ...useCases,
  ],
})
export default class BooksModule {}
