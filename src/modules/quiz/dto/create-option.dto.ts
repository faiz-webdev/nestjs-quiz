import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDTO {
  @IsNotEmpty()
  @Length(3, 255)
  text: string;

  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect: boolean;
}
