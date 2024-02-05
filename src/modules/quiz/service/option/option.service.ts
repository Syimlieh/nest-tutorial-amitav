import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOptionDto } from '../../dto/option.dto';
import { OptionEntity } from '../../entity/option.entity';
import { QuestionEntity } from '../../entity/question.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionEntity)
    private optionRepository: Repository<OptionEntity>,
    @InjectRepository(QuestionEntity)
    private questionRepository: Repository<QuestionEntity>,
  ) {}

  async createOption(
    option: CreateOptionDto,
    question: QuestionEntity,
  ): Promise<OptionEntity> {
    const saveOption = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });

    question.options = [...question.options, saveOption];
    await this.questionRepository.save(question);
    return saveOption;
  }
}
