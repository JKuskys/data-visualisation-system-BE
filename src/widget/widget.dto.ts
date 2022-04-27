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

  @IsOptional()
  @IsBoolean()
  markNegativeDifferently: boolean;

  @IsOptional()
  @IsBoolean()
  showLabels: boolean;

  @IsOptional()
  @IsBoolean()
  showPeriods: boolean;

  @IsOptional()
  @IsString()
  customLegend: string;

  @IsOptional()
  @IsBoolean()
  showYGrid: boolean;

  @IsOptional()
  @IsBoolean()
  showXGrid: boolean;

  @IsOptional()
  @IsBoolean()
  markFirst: boolean;

  @IsOptional()
  @IsBoolean()
  markLast: boolean;

  @IsOptional()
  @IsNumber()
  maxItems: number;
}
