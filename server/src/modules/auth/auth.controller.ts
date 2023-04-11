import { Body, Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: CreateAuthDto) {
    console.log('login dto');
    return this.authService.login(loginDto.email, loginDto.password);
  }
}
