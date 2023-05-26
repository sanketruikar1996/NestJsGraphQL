import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from './Product.entity';
import { ProductResolver } from './ProductResolver.resolver';
import { ProductService } from './Product.service';

@Module({
    imports: [TypeOrmModule.forFeature([ProductsEntity])],
    providers: [ProductService,ProductResolver],
    exports: [ProductService],
  })
export class ProductsModule {


}