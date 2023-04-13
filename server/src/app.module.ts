import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { UserService } from './modules/user/user.service';
import { TodoModule } from './modules/todo/todo.module';
import { TaskModule } from './modules/task/task.module';
import { UsertodoModule } from './modules/usertodo/usertodo.module';

@Module({
  imports: [UserModule, DatabaseModule, AuthModule, PassportModule, TodoModule, TaskModule, UsertodoModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
