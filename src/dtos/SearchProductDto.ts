import { IsOptional, IsString, IsNumber, Min, Max } from 'class-validator';

export class SearchProductDto {
    @IsString()
    query: string;

    @IsString()
    @IsOptional()
    languageCode: string = 'en';

    @IsNumber()
    @Min(0)
    @IsOptional()
    skip: number = 0;

    @IsNumber()
    @Min(1)
    @Max(100)
    @IsOptional()
    take: number = 10;
}
