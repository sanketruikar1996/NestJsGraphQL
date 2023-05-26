import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/Products.module';
import { ProductService } from './products/Product.service';
import { ProductsEntity } from './products/Product.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


@Module({
  imports: [ GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true
  }),TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'test',
    entities: [ProductsEntity],
    synchronize: true,
    // logging:true
  }), ProductsModule],
  providers: [AppService]
})
export class AppModule {}
