import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Translation } from 'src/entities/Translation';
import { Product } from 'src/entities/Product';
import { Language } from 'src/entities/Language';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Translation,
            Product,
            Language,
        ]),
    ],
    controllers: [ProductsController],
    providers: [
        ProductsService,
    ],
    exports: [
        ProductsService
    ]
})
export class ProductsModule { }
