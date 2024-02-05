import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createUserDto } from '../../dto/user.dto';
import { UserService } from '../../service/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UsePipes(new ValidationPipe())
  @Post('')
  createUser(@Body() user: createUserDto) {
    return this.userService.createUser(user);
  }
}
