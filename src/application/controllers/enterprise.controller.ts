import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { EnterpriseService } from "src/domain/services/enterprise.service";
import { CreateEnterpriseDTto } from "../dto/enterprise.create-dto";
import { Enterprise } from "src/domain/entities/enterprise.entity";

@Controller('enterprise')
export class EnterpriseController {
    constructor(private readonly enterprisesService: EnterpriseService) { }

    @Post('create')
    async create(@Body() createEnterpriseDTO: CreateEnterpriseDTto): Promise<CreateEnterpriseDTto> {
        return this.enterprisesService.create(createEnterpriseDTO);
    }

    @Get()
    async findAll(): Promise<Enterprise[]> {
        return await this.enterprisesService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Enterprise> {
        return await this.enterprisesService.findById(id);
    }

    @Delete(':id/delete')
    async delete(@Param('id/delete') id: string): Promise<void> {
        await this.enterprisesService.delete(id);
    }
}
