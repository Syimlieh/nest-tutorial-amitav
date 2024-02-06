import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../../service/auth/auth.service';
import { loginDto } from '../../dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards('local-auth')
  @Post('login')
  login(@Request() req, @Body() payload: loginDto): Promise<any> {
    return this.authService.validateUserCredential(payload);
  }
}
