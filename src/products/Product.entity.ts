import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  price: string;

  @Column({ nullable: true })
  catogery: string;

  @Column({ nullable: true })
  brand: string;
}
