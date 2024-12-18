import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/graphql/model/product.model';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}
