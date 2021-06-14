import { Body, Controller, Post } from '@nestjs/common'
import AddBook from '../../books/application/add-book.usecase'
import Book from '../../books/domain/book.domain'
import CreateBookDto from './dtos/create-book.dto'

@Controller('books')
export default class BooksController {
  constructor(private readonly addBook: AddBook) {}

  @Post('/')
  async createBook(@Body() body: CreateBookDto): Promise<Book> {
    return this.addBook.execute(body)
  }
}
