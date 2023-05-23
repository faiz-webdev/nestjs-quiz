import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';
import { UserRoles } from './enums/user.enum';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @ApiProperty({ description: 'Primary key as User ID', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'User name', example: 'Jhon Doe' })
  @Column({
    type: 'varchar',
  })
  name: string;

  @ApiProperty({
    description: 'User email address',
    example: 'jhon.doe@gmail.com',
  })
  @Column({
    type: 'varchar',
    unique: true,
  })
  email: string;

  @ApiProperty({ description: 'Hashed user password' })
  @Column({
    type: 'varchar',
  })
  password: string;

  @ApiProperty({ description: 'When user was created' })
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @ApiProperty({ description: 'When user was updated' })
  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  @ApiProperty({ description: 'When user was updated' })
  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.MEMBER })
  role: UserRoles;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
