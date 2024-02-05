import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDto } from 'src/user/dto/user.dto';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(user: createUserDto): Promise<User> {
    const newUser = new User();
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.mobile = user.mobile;
    newUser.password = user.password;
    return await this.userRepository.save(newUser);
  }
}
