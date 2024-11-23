import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    Unique,
    JoinColumn,
} from 'typeorm';
import { Language } from './Language';
import { Product } from './Product';

@Entity({ name: 'Translations', schema: 'Products' })
export class Translation {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, (product) => product.translations, {
        onDelete: 'CASCADE',
    })
    product: Product;

    @ManyToOne(() => Language, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'languageCode', referencedColumnName: 'code' })
    language: Language;

    @Column({ type: 'text' })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;
}
