import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { TypeEnterprise } from '../enums/typeEnterprise.enum';

@Entity('enterprise')
export class Enterprise {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 14})
    CNPJ: number;

    @Column({type: 'varchar', length: 100})
    companyName: string;

    @Column({type: 'varchar', length: 9})
    CEP: number;

    @Column({type: 'varchar', length: 100})
    address: string;

    @Column()
    type: TypeEnterprise;
}

@Entity('agricultural')
export class AgriculturalCompany extends Enterprise {
    @PrimaryGeneratedColumn('uuid')
    idAgriculturalCompany: string;

    @Column({type: 'float'})
    totalExported: number;

    @CreateDateColumn({type: 'timestamp'})
    dateFromDonations: Date;
}

@Entity('manufactoring')
export class ManufacturingCompany extends Enterprise {
    @PrimaryGeneratedColumn('uuid')
    idManufacturingCompany: string;

    @CreateDateColumn({type: 'timestamp'})
    dateCameDonations: Date;

    @CreateDateColumn({name: 'TotalCameDonations'})
    totalCameDonations: number;

}