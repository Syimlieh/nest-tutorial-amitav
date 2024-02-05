import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { QuestionEntity } from './question.entity';

@Entity('options')
export class OptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  isCorrect: boolean;

  @ManyToOne(() => QuestionEntity, (question) => question.options)
  question: QuestionEntity;
}
