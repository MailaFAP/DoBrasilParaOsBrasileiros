import { Body, Controller, Get, Post } from "@nestjs/common";
import { FactoryEnterprise } from "src/domain/models/enterprises.models";
import { IEnterpriseService } from "src/domain/services/enterprise.service";
import { ICreateEnterpriseDTto } from "../DTOs/enterprise.create-dto";

@Controller('enterprise')
export class EnterpriseController {
	private readonly enterprisesService: IEnterpriseService

	constructor(enterprisesService: IEnterpriseService) { 
		this.enterprisesService = enterprisesService;
	}

    @Post()
	create(@Body() createEnterprise: ICreateEnterpriseDTto) {
        const registerEnterprise = new ICreateEnterpriseDTto(
            createEnterprise.CNPJ,
            createEnterprise.companyName,
            createEnterprise.address
            )
        return this.enterprisesService.create(registerEnterprise);
    }

}
