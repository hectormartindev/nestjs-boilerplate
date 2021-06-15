import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import AddBook from '../../books/application/add-book.usecase'
import FindBookByUuid from '../../books/application/find-book-by-uuid.usecase'
import Book from '../../books/domain/book.domain'
import CreateBookDto from './dtos/create-book.dto'

@Controller('books')
export default class BooksController {
  constructor(private readonly addBook: AddBook, private readonly findBookByUuid: FindBookByUuid) {}

  @Post()
  async createBook(@Body() body: CreateBookDto): Promise<Book> {
    return this.addBook.execute(body)
  }

  @Get('/:uuid')
  async getBookByUuid(@Param() uuid: string): Promise<Book> {
    return this.findBookByUuid.execute({ uuid })
  }
}
