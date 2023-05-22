import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from '../repositories/quiz.respository';
import { CreateQuizDTO } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .getMany();
  }

  async createQuiz(quiz: CreateQuizDTO) {
    return await this.quizRepository.save(quiz);
  }

  async getQuizById(id: any): Promise<Quiz> {
    // return await this.quizRepository.findOne(id, {});
    return await this.quizRepository.findOne({
      where: { id: id },
      relations: ['questions', 'questions.options'],
    });
  }
}
