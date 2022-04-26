import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class WidgetDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsBoolean()
  isPublic: boolean;

  @IsBoolean()
  takeFromStart: boolean;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  method: string;

  @IsString()
  customAttribute: string;

  @IsString()
  customValue: string;

  @IsString()
  customLabel: string;

  @IsNumber()
  customMin: number;

  @IsNumber()
  customMax: number;

  @IsString()
  @IsNotEmpty()
  author: string;
}
