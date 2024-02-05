import { Injectable, UsePipes } from '@nestjs/common';
import { Question } from '../../interface/quiz/quiz.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizEntity } from '../../entity/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizEntity)
    private quizRepository: Repository<QuizEntity>,
  ) {}
  private readonly question: Question[] = [];

  @UsePipes()
  async create(q: Question) {
    return await this.quizRepository.save(q);
  }

  async fetchAllQuiz(): Promise<[QuizEntity[], number]> {
    // this return a plain js object
    return await this.quizRepository
      .createQueryBuilder('quiz')
      .leftJoinAndSelect('quiz.questions', 'questions') // joining with questions entity
      .leftJoinAndSelect('questions.options', 'options') // joining with options entity
      .take(2) // limit records
      .getManyAndCount();
  }

  async fetchQuizById(id: number): Promise<QuizEntity> {
    // this return a plain js object
    const quiz = await this.quizRepository.findOne({
      where: { id },
      relations: ['questions', 'questions.options'],
    });
    return quiz;
  }
}
