import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';
import { CreateOptionDTO } from '../dto/create-option.dto';

@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() createOptionDTO: CreateOptionDTO) {
    const question = await this.questionService.findQuestionById(
      createOptionDTO.questionId,
    );

    const option = await this.optionService.createOption(
      createOptionDTO,
      question,
    );
    return { question, createOptionDTO };
  }
}
