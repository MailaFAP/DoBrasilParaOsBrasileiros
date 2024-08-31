import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { TypeEnterprise } from "src/domain/enums/typeEnterprise.enum"; 

export class CreateEnterpriseDto{
    @ApiProperty({example: '01023524125635', description: 'CNPJ da empresa'})
    @IsNotEmpty()
    @IsNumber()
    CNPJ: number;

    @ApiProperty({example: 'Nicole e Francisca Alimentos Ltda', description: 'Nome da empresa'})
    @IsNotEmpty()
    @IsString()
    companyName: string;

    @ApiProperty({example: '052412635', description: 'Cep do endereço da empresa'})
    @IsNotEmpty()
    @IsNumber()
    CEP: number;

    @ApiProperty({example: 'Rua da Paz, 36', description: 'Endereço da empresa'})
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({example: 'manufactoring', description: 'Tipo de serviço'})
    @IsNotEmpty()
    @IsString()
    type:TypeEnterprise;

   
}