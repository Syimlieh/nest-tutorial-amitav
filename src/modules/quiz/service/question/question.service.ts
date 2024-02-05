import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../../dto/question.dto';
import { QuestionEntity } from '../../entity/question.entity';
import { QuizEntity } from '../../entity/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionEntity)
    private questionRepository: Repository<QuestionEntity>,
    @InjectRepository(QuizEntity)
    private quizRepository: Repository<QuizEntity>,
  ) {}

  async findQuestionById(id: number): Promise<QuestionEntity> {
    return await this.questionRepository.findOne({
      where: { id },
      relations: ['options'],
    });
  }

  async createQuestion(
    payload: CreateQuestionDto,
    quiz: QuizEntity,
  ): Promise<QuestionEntity> {
    console.log(Object.keys(quiz));
    const saveQuestion = await this.questionRepository.save({
      question: payload.question,
    });
    quiz.questions = [...quiz.questions, saveQuestion];
    await this.quizRepository.save(quiz);

    return saveQuestion;
  }
}
