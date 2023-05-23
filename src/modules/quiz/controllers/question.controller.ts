import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDTO } from '../dto/create-question.dto';
import { QuestionService } from '../services/question.service';
import { Question } from '../entities/question.entity';
import { QuizService } from '../services/quiz.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Question')
@Controller('question')
export class QusestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() question: CreateQuestionDTO): Promise<Question> {
    try {
      const quiz = await this.quizService.getQuizById(question.quizid);
      return await this.questionService.createQuestion(question, quiz);
    } catch (error) {
      throw new Error(`Error creating ${error}`);
    }
  }
}
