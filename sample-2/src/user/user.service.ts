import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user.dto';
import { v4 } from 'uuid';

@Injectable()
export class UserService {
  createUser(user: UserDto): UserDto {
    user.id = v4();
    user.createdAt = new Date();
    user.updatedAt = new Date();
    return UserDto.plainToClass(user);
  }
}
