import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dtos/CreateProductDto';
import { SearchProductDto } from 'src/dtos/SearchProductDto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post('create')
    async create(@Body() createProductDtos: CreateProductDto[]) {
        return this.productsService.create(createProductDtos);
    }

    @Post('search')
    async searchProducts(@Body() searchParams: SearchProductDto) {
        const { query, languageCode, skip, take } = searchParams;
        return this.productsService.search(query, languageCode, skip, take);
    }

    @Get('find-all')
    async findAll() {
        return this.productsService.findAll();
    }
}
