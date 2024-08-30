import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { TypeEnterprise } from "src/domain/enums/typeEnterprise.enum"; 

export class CreateEnterpriseDTto{
    @IsNotEmpty()
    @IsNumber()
    CNPJ: number;

    @IsNotEmpty()
    @IsString()
    companyName: string;

    @IsNotEmpty()
    @IsNumber()
    CEP: number;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    type:TypeEnterprise;

   
}