import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDTO {
  @IsNotEmpty({ message: 'The quiz title is required' })
  @Length(3, 255)
  title: string;

  @IsNotEmpty()
  @Length(3)
  description: string;
}
