import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsertodoService } from './usertodo.service';
import { CreateUsertodoDto } from './dto/create-usertodo.dto';
import { UpdateUsertodoDto } from './dto/update-usertodo.dto';

@Controller('usertodo')
export class UsertodoController {
  constructor(private readonly usertodoService: UsertodoService) {}

  @Post()
  create(@Body() createUsertodoDto: CreateUsertodoDto) {
    return this.usertodoService.createUsertodoList(createUsertodoDto);
  }

  @Get()
  findAll() {
    return this.usertodoService.findAllUsertodoList();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usertodoService.findOneUsertodoList(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateUsertodoDto: UpdateUsertodoDto,
  ) {
    return this.usertodoService.updateUsertodoList(id, updateUsertodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usertodoService.deleteUsertodoList(id);
  }
}
