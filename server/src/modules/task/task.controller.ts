import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('new-task')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }
  @Get('')
  findAll() {
    return this.taskService.findAll();
  }

  @Get('todoListId')
  findAllTask(@Param('todoListId') todoListId: number) {
    return this.taskService.findAllTask(todoListId);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.taskService.findOneTask(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.updateTask(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.taskService.deleteTask(+id);
  }
}
