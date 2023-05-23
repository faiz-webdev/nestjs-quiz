import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDTO } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { ApiPaginatedResponse } from 'src/common/decorator/api-pagination.response';

@ApiTags('Quiz')
@Controller('quiz')
@ApiSecurity('bearer')
@UseGuards(JwtAuthGuard)
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  @ApiPaginatedResponse({ model: Quiz, description: 'List of quizzes' })
  async getAllQuiz(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 1,
  ): Promise<Pagination<Quiz>> {
    const options: IPaginationOptions = {
      limit,
      page,
    };
    return await this.quizService.paginate(options);
  }

  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: string) {
    return await this.quizService.getQuizById(id);
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDTO) {
    // console.log(__dirname + '/../**/*.entity{.ts, .js}');
    // return { data: quizData };
    return await this.quizService.createQuiz(quizData);
  }
}
