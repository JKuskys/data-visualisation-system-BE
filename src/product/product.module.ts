import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './controller/product.controller';
import { ProductEntity } from './product.entity';
import { ProductsService } from './service/product/product.service';

@Module({
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductsController],
})
export class ProductModule {}
