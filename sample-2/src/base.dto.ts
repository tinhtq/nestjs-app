import { Expose, plainToClass } from 'class-transformer';

export abstract class BaseDto {
  @Expose()
  id: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  static plainToClass<T>(this: new (...args) => T, obj: T): T {
    return plainToClass(this, obj, {
      excludeExtraneousValues: true,
    });
  }
}
