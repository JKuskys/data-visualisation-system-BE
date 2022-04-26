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
import { WidgetDto } from '../widget.dto';

@Controller('api/v1/widgets')
export class WidgetController {
  constructor(private widgetService: WidgetService) {}

  @Post('/data')
  async GetWidgetData(@Body() widget: WidgetDto) {
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
          { label: 'label2', value: 'asd' },
          { label: 'label3', value: 60 },
        ],
      },
    });
  }

  @Get('private/:author')
  async GetAllPrivate(@Param() author: { author: string }): Promise<string[]> {
    return (await this.widgetService.getAllPrivate(author.author)).map(
      (data) => data.key,
    );
  }

  @Get()
  async GetAll(): Promise<WidgetEntity[]> {
    return await this.widgetService.getAll();
  }

  @Post()
  async Create(@Body() widget: WidgetDto): Promise<WidgetEntity> {
    return await this.widgetService.create(widget);
  }

  @Get(':key')
  async GetOne(@Param() key: { key: string }): Promise<WidgetEntity> {
    console.log(key);
    return await this.widgetService.getOne(key.key);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async Update(
    @Param() id: number,
    @Body() widget: WidgetDto,
  ): Promise<UpdateResult> {
    return await this.widgetService.update(id, widget);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async Delete(@Param() id: number): Promise<DeleteResult> {
    return await this.widgetService.delete(id);
  }
}
