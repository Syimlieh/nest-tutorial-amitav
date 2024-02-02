import { InjectRepository } from "@nestjs/typeorm";
import { QuizEntity } from "../entity/quiz.entity";
import { Repository } from "typeorm";

export class quizRepository {
    constructor(
        private usersRepository: Repository<QuizEntity>,
      ) {}
}

