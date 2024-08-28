import { v4 as uuidv4 } from 'uuid';


export class FactoryEnterprise{
    CNPJ: number;
    companyName: string;
    address: string;

    constructor(CNPJ:number, companyName:string,address:string){
        this.CNPJ = CNPJ;
        this.companyName = companyName;
        this.address = address;
    }
}

export class AgriculturalCompany extends FactoryEnterprise{
    idAgriculturalCompany: string;
    dateFromDonations: number;
    totalExported:number;

    constructor(CNPJ:number,companyName:string,address:string,dateFromDonations: number, totalExported:number){
        super(CNPJ,companyName,address);
        this.idAgriculturalCompany = uuidv4();
        this.dateFromDonations = dateFromDonations;
        this.totalExported = totalExported;
    }
    makesDonations(totalExported){
        return totalExported * 0.10;
    }
}

export class ManufacturingCompany extends FactoryEnterprise{
    idManufacturingCompany: string;
    dateCameDonations: number;
    totalCameDonations : number;

    constructor(CNPJ:number,companyName:string,address:string,dateCameDonations:number, totalCameDonations:number){
        super(CNPJ,companyName,address);
        this.idManufacturingCompany = uuidv4();
        this.dateCameDonations = dateCameDonations;
        this.totalCameDonations = totalCameDonations;
    }
    receivesDonations(totalCameDonations){
        return totalCameDonations;
    }
}