import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateResult, DeleteResult } from 'typeorm';
import { WidgetEntity } from '../widget.entity';
import { WidgetService } from '../service/widget/widget.service';

@Controller('api/v1/widgets')
export class WidgetController {
  constructor(private widgetService: WidgetService) {}

  @Get('/data')
  async GetWidgetData(@Body() widget: WidgetEntity) {
    return await this.widgetService.getWidgetData(widget);
  }

  @Get('/test1')
  async GetTest1(): Promise<any[]> {
    return await Promise.resolve([
      { label: 'label1', value: 20 },
      { label: 'label2', value: 45 },
      { label: 'label3', value: 60 },
    ]);
  }

  @Post('/test1')
  async PostTest1(): Promise<any[]> {
    return await Promise.resolve([
      { label: 'postLabel1', value: 20 },
      { label: 'postLabel2', value: 45 },
      { label: 'postLabel3', value: 60 },
    ]);
  }

  @Get('/test2')
  async GetTest2(): Promise<any> {
    return await Promise.resolve({
      data: {
        data: [
          { label: 'label1', value: 20 },
          { label: 'label2', value: '45' },
          { label: 'label3', value: 60 },
        ],
      },
    });
  }

  @Post('/test2')
  async PostTest2(): Promise<any> {
    return await Promise.resolve({
      data: {
        data: [
          { labelsmh: 'label1', value2: 20 },
          { label: 'label2', value: 45 },
          { label5: 'label3', value: 60 },
        ],
      },
    });
  }

  @Get()
  async GetAll(): Promise<WidgetEntity[]> {
    return await this.widgetService.getAll();
  }

  @Post()
  async Create(@Body() widget: WidgetEntity): Promise<WidgetEntity> {
    return await this.widgetService.create(widget);
  }

  @Get(':key')
  async GetOne(@Param() key: string): Promise<WidgetEntity> {
    return await this.widgetService.getOne(key);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async Update(
    @Param() id: number,
    @Body() widget: WidgetEntity,
  ): Promise<UpdateResult> {
    return await this.widgetService.update(id, widget);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async Delete(@Param() id: number): Promise<DeleteResult> {
    return await this.widgetService.delete(id);
  }
}
