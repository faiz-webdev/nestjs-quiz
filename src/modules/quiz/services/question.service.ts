import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDTO } from '../dto/create-question.dto';
import { QuestionRepository } from '../repositories/question.repository';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async createQuestion(
    question: CreateQuestionDTO,
    quiz: Quiz,
  ): Promise<Question> {
    try {
      const newQuestion = await this.questionRepository.save({
        question: question.question,
      });

      // console.log([...quiz.questions, newQuestion]);

      quiz.questions = [...quiz.questions, newQuestion];

      await quiz.save();

      return newQuestion;
    } catch (e) {
      throw e;
    }
  }

  async findQuestionById(id: number): Promise<Question> {
    return await this.questionRepository.findOne({
      where: { id: id },
      relations: ['quiz', 'options'],
    });
  }
}
