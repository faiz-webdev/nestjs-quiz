import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Question } from '../entities/question.entity';

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question> {
  constructor(private dataSource: DataSource) {
    super(Question, dataSource.createEntityManager());
  }
}
