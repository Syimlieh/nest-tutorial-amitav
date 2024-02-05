import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from 'src/quiz/dto/question.dto';
import { QuestionEntity } from 'src/quiz/entity/question.entity';
import { QuizEntity } from 'src/quiz/entity/quiz.entity';
import { Repository } from 'typeorm';

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
