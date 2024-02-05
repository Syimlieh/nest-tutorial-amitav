import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionDto } from 'src/quiz/dto/option.dto';
import { OptionEntity } from 'src/quiz/entity/option.entity';
import { QuestionEntity } from 'src/quiz/entity/question.entity';
import { Repository } from 'typeorm';

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
