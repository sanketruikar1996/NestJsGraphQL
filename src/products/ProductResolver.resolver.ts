import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { ProductType } from '../products/ProductType.type';
import { ProductService } from './Product.service';

@Resolver((of) => ProductType)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query((returns) => [ProductType])
  async getProducts() {
    return await this.productService.getProduct();
  }

  @Mutation((returns) => ProductType)
  createProduct(
    @Args('name') name: string,
    @Args('price') price: string,
    @Args('catogery') catogery: string,
    @Args('brand') brand: string,
  ) {
    return this.productService.createProduct(name, price, catogery, brand);
  }
}
