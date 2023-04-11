import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/utils/bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findUserByEmail(email);
    if (user) {
      const matchPassword = await comparePassword(password, user.password);
      if (matchPassword) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }
  }

  async login(email: string, password: string) {
    const user = await this.userService
      .findUserByEmail(email)
      .then((data) => data?.dataValues);
    if (user) {
      const matchPassword = await comparePassword(password, user.password);
      if (matchPassword) {
        const { password, ...userToTokenize } = user;

        return {
          access_token: this.jwtService.sign(userToTokenize),
          user: userToTokenize,
        };
      }
    }
    throw new NotFoundException(
      'User does not exist for the following login credentials',
    );
  }
}
