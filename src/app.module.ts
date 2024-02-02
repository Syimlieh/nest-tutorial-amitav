import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
