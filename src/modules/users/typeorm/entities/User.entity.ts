import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  agency: number;
  @Column()
  account_number: number;
  @Column()
  account_digit: number;
  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;
  @UpdateDateColumn({ type: 'datetime' })
  updated_at: Date;
}

export default User;
