import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { join } from 'path';
import { ProductModule } from './product/product.module';
import { Product } from './graphql/model/product.model';
import { Category } from './graphql/model/category.model';

config();

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Auto-generates schema.gql
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
      username: process.env.MYSQL_USER || 'pou',
      password: process.env.MYSQL_PASSWORD || 'pou_123',
      database: process.env.MYSQL_DATABASE || 'inventory',
      entities: [Product, Category],
      synchronize: true,
      logging: true,
    }),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
