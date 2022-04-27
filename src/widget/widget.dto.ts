import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

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

  @IsOptional()
  @IsString({})
  customAttribute: string;

  @IsOptional()
  @IsString()
  customValue: string;

  @IsOptional()
  @IsString()
  customLabel: string;

  @IsOptional()
  @IsNumber()
  customMin: number;

  @IsOptional()
  @IsNumber()
  customMax: number;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsOptional()
  @IsString()
  widgetType: string;

  @IsOptional()
  @IsString()
  customPrimaryColor: string;

  @IsOptional()
  @IsString()
  customSecondaryColor: string;

  @IsOptional()
  @IsString()
  customNegativePrimaryColor: string;

  @IsOptional()
  @IsString()
  customNegativeSecondaryColor: string;

  @IsBoolean()
  markNegativeDifferently: boolean;

  @IsOptional()
  @IsString()
  customLegend: string;

  @IsBoolean()
  showYGrid: boolean;

  @IsBoolean()
  showXGrid: boolean;
}
