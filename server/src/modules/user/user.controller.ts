import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('/todos')
  getUserWithTodo(@Request() req) {
    return this.userService.getUserWithTodo(req.user.id);
  }
  @Get('todo')
  getAllUserWithTodo() {
    console.log('ldfl');

    return this.userService.getAllUserWithTodo();
  }
  @Get(':email')
  findUserByEmail(@Param('email') email: string) {
    return this.userService.findUserByEmail(email);
  }

  @Get('')
  findAllUser() {
    return this.userService.findAllUser();
  }

  @Get(':id')
  findOneUser(@Param('id') id: number) {
    return this.userService.findOneUser(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
