import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot(typeOrmConfig), UserModule],
})
export class AppModule {}
