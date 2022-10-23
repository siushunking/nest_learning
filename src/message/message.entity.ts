import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

}