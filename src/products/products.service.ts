import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Translation } from 'src/entities/Translation';
import { Product } from 'src/entities/Product';
import { CreateProductDto } from 'src/dtos/CreateProductDto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(Translation)
        private readonly translationRepository: Repository<Translation>,
    ) { }

    async create(createProductDtos: CreateProductDto[]): Promise<Product[]> {
        try {
            const products = createProductDtos.map((dto) => {
                const product = new Product();
                product.name = dto.name;
                product.description = dto.description;
                return product;
            });
            
            const savedProducts = await this.productRepository.save(products);

            const translations = createProductDtos.flatMap((createProductDto, index) => {
                const savedProduct = savedProducts[index];
                return createProductDto.translations.map((translation) => {
                    const productTranslation = new Translation();
                    productTranslation.product = savedProduct;
                    productTranslation.language = { code: translation.languageCode } as any;
                    productTranslation.name = translation.name;
                    productTranslation.description = translation.description;
                    return productTranslation;
                });
            });

            await this.translationRepository.save(translations);

            return savedProducts;
        } catch (error) {
            console.error('Error occurred while creating products:', error);
            throw new Error('Failed to create. Please try again later.');
        }
    }

    async findAll(): Promise<Product[]> {
        return this.productRepository.find({ relations: ['translations'] });
    }
}
