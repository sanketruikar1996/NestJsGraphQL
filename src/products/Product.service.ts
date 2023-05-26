import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductsEntity } from './Product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductsEntity)
    public userRepository: Repository<ProductsEntity>,
  ) {}

  async getProduct() {
    await this.userRepository.find();
  }

  async createProduct(
    name: string,
    price: string,
    catogery: string,
    brand: string,
  ) {
    const product = new ProductsEntity();
    product.name = name;
    product.price = price;
    product.catogery = catogery;
    product.brand = brand;

    await this.userRepository.save(product);
    return product;
  }
}
