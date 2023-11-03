import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { StoreService } from './store.service';

function createStorage(): StoreService {
  return new StoreService();
}
@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'USER_SERVICE_TEST',
      useClass: UserService,
    },
    {
      provide: 'STORE_SERVICE',
      useFactory: createStorage,
    },
  ],
})
export class UserModule {}
