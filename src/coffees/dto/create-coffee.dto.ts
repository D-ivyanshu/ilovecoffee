import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateCoffeeDto {
  @IsNotEmpty()
  @IsInt()
  readonly id: number;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
