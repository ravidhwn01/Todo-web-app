import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('new-todo')
  createTodoList(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodoList(createTodoDto);
  }

  @Get('all-todo')
  findAll() {
    return this.todoService.findAllTodoList();
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
