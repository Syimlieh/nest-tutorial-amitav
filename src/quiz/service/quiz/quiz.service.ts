import { Injectable, UsePipes } from '@nestjs/common';
import { Question } from '../../interface/quiz/quiz.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizEntity } from 'src/quiz/entity/quiz.entity';
import { Repository } from 'typeorm';

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

  async fetchQuizById(id: number): Promise<QuizEntity> {
    // this return a plain js object
    return await this.quizRepository
      .createQueryBuilder('quiz')
      .where('quiz.id = :id', { id })
      .leftJoinAndSelect('quiz.questions', 'questions')
      .getOne();
  }

  async fetchAllQuiz(): Promise<{
    entities: QuizEntity[];
    totalCount: number;
  }> {
    const [entities, totalCount] = await this.quizRepository.findAndCount();
    return { entities, totalCount };
  }
}
