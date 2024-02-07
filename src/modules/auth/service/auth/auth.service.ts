import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/modules/user/service/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService) private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUserCredential(username: string, password: string) {
    const fetchUser = await this.userService.fetchUserByEmail(username);
    if (!fetchUser) {
      throw new NotFoundException('User With this email does not exist');
    }

    const comparePassword = await bcrypt.compare(password, fetchUser.password);
    if (!comparePassword) {
      throw new UnauthorizedException('Invalid Credentials');
    }
    return fetchUser;
  }

  async login(user: any) {
    const payload = {
      username: user.name,
      email: user.email,
      mobile: user.mobile,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
