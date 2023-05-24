import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FileDTO {
  @ApiProperty({
    description: 'The title of the quiz',
    example: 'How good are your with Laravel?',
  })
  @IsNotEmpty({ message: 'The quiz title is required' })
  @Length(3, 255)
  title: string;
}
