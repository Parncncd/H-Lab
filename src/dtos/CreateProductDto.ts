import { IsArray, IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class TranslationDto {
    @IsString()
    @IsNotEmpty()
    languageCode: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;
}

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;

    @ValidateNested({ each: true })
    @Type(() => TranslationDto)
    @IsArray()
    translations: TranslationDto[];
}
