export class ICreateEnterpriseDTto{
    CNPJ?: number;
    companyName?: string;
    address?: string;

    constructor(CNPJ:number, companyName:string, address:string){
        this.CNPJ = CNPJ;
        this.companyName = companyName;
        this.address = address
    }
    

}