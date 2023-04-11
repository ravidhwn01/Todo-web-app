import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository, Sequelize } from 'sequelize-typescript';
import { UserModel } from 'src/schemas/user-schema';
import { encryptPassword } from 'src/utils/bcrypt';

@Injectable()
export class UserService {
  private repository: Repository<UserModel>;
  constructor(private sequelize: Sequelize) {
    this.repository = this.sequelize.getRepository(UserModel);
  }
  createUser(createUserDto: CreateUserDto) {
    const password = encryptPassword(createUserDto.password);

    return this.repository.create({ ...createUserDto, password });
  }

  findAllUser() {
    return this.repository.findAll();
  }

  findOneUser(id: number) {
    return this.repository.findOne({
      where: {
        id,
      },
    });
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(updateUserDto, {
      where: {
        id,
      },
    });
  }

  deleteUser(id: number) {
    return this.repository.destroy({
      where: {
        id,
      },
    });
  }
}
