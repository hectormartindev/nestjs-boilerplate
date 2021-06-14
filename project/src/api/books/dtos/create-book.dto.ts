import { IsEnum, IsISBN, IsPositive, Length } from 'class-validator'
import Genre from '../../../books/domain/types/genre.enum'

export default class CreateBookDto {
  @Length(0, 36)
  title!: string

  @IsISBN()
  isbn!: string

  @IsPositive()
  numberOfPages!: number

  @IsEnum(Genre)
  genre!: Genre
}
