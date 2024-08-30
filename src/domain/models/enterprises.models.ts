import { v4 as uuidv4 } from 'uuid';
import { TypeEnterprise } from '../enums/typeEnterprise.enum';


export class Enterprise{
    CNPJ: number;
    companyName: string;
    CEP: number;
    address: string;
    type: TypeEnterprise;

    constructor(CNPJ:number, companyName:string,CEP: number,address:string, type: TypeEnterprise){
        this.CNPJ = CNPJ;
        this.companyName = companyName;
        this.CEP = CEP;
        this.address = address;
        this.type = type;
    }
}

export class AgriculturalCompany extends Enterprise{
    idAgriculturalCompany: string;
    dateFromDonations: number;
    totalExported:number;
    

    constructor(CNPJ:number,companyName:string,CEP: number,address:string,dateFromDonations: number, totalExported:number, type:TypeEnterprise){
        super(CNPJ,companyName,CEP,address,type);
        this.idAgriculturalCompany = uuidv4();
        this.dateFromDonations = dateFromDonations;
        this.totalExported = totalExported;
        this.type = TypeEnterprise.AgriculturalCompany;
    }
    makesDonations(totalExported){
        return totalExported * 0.10;
    }
}

export class ManufacturingCompany extends Enterprise{
    idManufacturingCompany: string;
    dateCameDonations: number;
    totalCameDonations : number;
    type: TypeEnterprise;

    constructor(CNPJ:number,companyName:string,CEP: number,address:string,dateCameDonations:number, totalCameDonations:number, type:TypeEnterprise){
        super(CNPJ,companyName,CEP,address,type);
        this.idManufacturingCompany = uuidv4();
        this.dateCameDonations = dateCameDonations;
        this.totalCameDonations = totalCameDonations;
        this.type = TypeEnterprise.ManufacturingCompany;
    }
    receivesDonations(totalCameDonations){
        return totalCameDonations;
    }
}