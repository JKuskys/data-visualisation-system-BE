import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WidgetController } from './controller/widget.controller';
import { WidgetEntity } from './widget.entity';
import { WidgetService } from './service/widget/widget.service';

@Module({
  providers: [WidgetService],
  imports: [TypeOrmModule.forFeature([WidgetEntity]), HttpModule],
  controllers: [WidgetController],
})
export class WidgetModule {}
