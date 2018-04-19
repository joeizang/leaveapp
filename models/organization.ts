import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Staff } from "./staff";

@Entity()
export class Organization
{
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    name: string = "";

    @Column()
    address: string = "";

    @Column()
    description: string = "";

    @OneToMany(type => Staff, staff => staff.organization)
    staff: Staff[] = new Array<Staff>();
}