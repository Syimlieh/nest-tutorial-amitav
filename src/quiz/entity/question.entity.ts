import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { QuizEntity } from './quiz.entity';

@Entity('questions')
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @ManyToOne(() => QuizEntity, (quiz) => quiz.questions)
  quiz: QuizEntity;
}
