import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/modules/user/service/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@Inject(UserService) private userService: UserService) {}

  async validateUserCredential(user: any) {
    const fetchUser = await this.userService.fetchUserByEmail(user.email);
    if (!fetchUser) {
      throw new NotFoundException('User With this email does not exist');
    }

    const comparePassword = await bcrypt.compare(
      user.password,
      fetchUser.password,
    );
    if (!comparePassword) {
      throw new UnauthorizedException('Invalid Credentials');
    }
    return fetchUser;
  }
}
