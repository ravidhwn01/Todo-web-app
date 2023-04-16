import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('new-todo')
  createTodoList(@Request() req, @Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodoList(createTodoDto, req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all-todo')
  findAll(@Request() req) {
    return this.todoService.findAllTodoList(req.user.id);
  }

  @Get('todo/tasks/:id')
  findAllTodoWithTask(@Param('id') id: number) {
    return this.todoService.findTodoListWithTask(id);
  }

  @Get('todo/:id')
  findOne(@Param('id') id: number) {
    return this.todoService.findOneTodoList(id);
  }

  @Patch('todo/:id')
  update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.updateTodoList(id, updateTodoDto);
  }

  @Delete('todo:id')
  remove(@Param('id') id: number) {
    return this.todoService.deleteTodoList(id);
  }
}
