import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from 'src/constants/jwt-secretkey';
import { UserModel } from 'src/schemas/user-schema';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModel,
    PassportModule,
    JwtModule.register({
      secret: jwtConstant.secret,
      signOptions: {
        expiresIn: '1h',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, AuthService],
  exports: [AuthService, AuthModule],
})
export class AuthModule {}
