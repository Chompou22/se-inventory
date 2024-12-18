import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/graphql/model/product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Create a Product
  async create(createProductInput: CreateProductInput): Promise<Product> {
    const product = this.productRepository.create(createProductInput);
    return await this.productRepository.save(product);
  }

  // Find All Products
  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // Find a Product by ID
  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  // Update a Product
  async update(
    id: number,
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    const product = await this.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    await this.productRepository.update(id, updateProductInput);
    return this.findOne(id);
  }

  // Remove a Product
  async remove(id: number): Promise<Product> {
    const product = await this.findOne(id);
    await this.productRepository.delete(id);
    return product;
  }
}
