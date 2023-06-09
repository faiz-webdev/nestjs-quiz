import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './repositories/quiz.respository';
import { QusestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { QuestionRepository } from './repositories/question.repository';
import { OptionRepository } from './repositories/option.repository';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';
import { UserModule } from '../user/user.module';
import { ResponseService } from './services/response.service';
import { ResponseController } from './controllers/response.controller';

@Module({
  controllers: [
    QuizController,
    QusestionController,
    OptionController,
    ResponseController,
  ],
  //   imports: [TypeOrmModule.forFeature([Quiz, QuestionRepository])],
  imports: [
    TypeOrmModule.forFeature([
      QuizRepository,
      QuestionRepository,
      OptionRepository,
    ]),
    UserModule,
  ],
  providers: [
    QuizService,
    QuizRepository,
    QuestionService,
    QuestionRepository,
    OptionRepository,
    OptionService,
    ResponseService,
  ],
})
export class QuizModule {}
