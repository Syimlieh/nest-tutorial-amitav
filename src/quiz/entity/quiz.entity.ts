import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { QuestionEntity } from './question.entity';

@Entity('quiz')
export class QuizEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => QuestionEntity, (question) => question.quiz)
  questions: QuestionEntity[];
}
