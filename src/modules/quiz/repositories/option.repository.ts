import { Repository, EntityRepository, DataSource } from 'typeorm';
import { Option } from '../entities/option.entity';
import { Injectable } from '@nestjs/common';

// @EntityRepository(Option)
@Injectable()
export class OptionRepository extends Repository<Option> {
  constructor(private dataSource: DataSource) {
    super(Option, dataSource.createEntityManager());
  }
}
