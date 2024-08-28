import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FactoryEnterprise {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    cnpj: string;

    @Column()
    companyName: string;

    @Column()
    address: string;
}

@Entity()
export class AgriculturalCompany extends FactoryEnterprise {

    @Column()
    totalExported: number;

    @Column()
    dateFromDonations: number;
}

@Entity()
export class ManufacturingCompany extends FactoryEnterprise {
    @Column()
    dateCameDonations: number;
    totalCameDonations: number;

}