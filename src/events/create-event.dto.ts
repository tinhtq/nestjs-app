import { IsDateString, Length } from 'class-validator'
export class CreateEventDto {
  @Length(5, 25, {})
  name: string
  @Length(5, 200)
  description: string
  @IsDateString()
  when: string
  @Length(5, 200, { groups: ['create'] })
  @Length(10, 200, { groups: ['update'] })
  address: string
}
