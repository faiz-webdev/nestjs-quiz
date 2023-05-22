import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OptionRepository } from '../repositories/option.repository';
import { CreateOptionDTO } from '../dto/create-option.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionRepository)
    private optionRepository: OptionRepository,
  ) {}

  async createOption(option: CreateOptionDTO, question: Question) {
    try {
      const newOption = await this.optionRepository.save({
        text: option.text,
        isCorrect: option.isCorrect,
      });

      question.options = [...question.options, newOption];
      await question.save();

      return newOption
    } catch (e) {
      throw e;
    }
  }
}
