import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserDto } from 'src/user.dto';
import { UserService } from './user.service';
import { StoreService } from './store.service';

@Controller('users')
export class UserController {
  constructor(
    @Inject('USER_SERVICE_TEST') private readonly userService: UserService,
    @Inject('STORE_SERVICE') private storeService: StoreService,
  ) {}
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    this.storeService.save(user);
    return this.userService.createUser(user);
  }
}
