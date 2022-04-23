import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  Repository,
  UpdateResult,
  DeleteResult,
  FindOneOptions,
} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async getAll(): Promise<ProductEntity[]> {
    return await this.productRepository.find();
  }

  async create(product: ProductEntity): Promise<ProductEntity> {
    return await this.productRepository.save(product);
  }

  async getOne(id: number): Promise<ProductEntity> {
    return this.productRepository.findOne({
      id,
    } as FindOneOptions<ProductEntity>);
  }

  async update(id: number, product: ProductEntity): Promise<UpdateResult> {
    return await this.productRepository.update(id, product);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.productRepository.delete(id);
  }
}
