import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Languages', schema: 'Products' })
export class Language {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 5, unique: true })
    code: string; // e.g., "en", "th"

    @Column({ length: 50 })
    name: string; // e.g., "English", "Thai"
}
