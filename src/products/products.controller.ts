import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dtos/CreateProductDto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post('create')
    async create(@Body() createProductDtos: CreateProductDto[]) {
        return this.productsService.create(createProductDtos);
    }

    @Get('find-all')
    async findAll() {
        return this.productsService.findAll();
    }
}