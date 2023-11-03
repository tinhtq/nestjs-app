import { Expose, Transform } from 'class-transformer';
import { BaseDto } from './base.dto';
import { Length } from 'class-validator';

export class UserDto extends BaseDto {
  @Expose()
  @Length(5, 20)
  username: string;

  firstName: string;

  lastName: string;

  @Expose()
  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  fullname: string;

  @Expose()
  @Length(5, 20)
  password: string;
}
