import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { EnterpriseService } from "src/domain/services/enterprise.service";
import { CreateEnterpriseDto } from "../dto/enterprise.create-dto";
import { Enterprise } from "src/domain/entities/enterprise.entity";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('enterprises')
@Controller('enterprise')
export class EnterpriseController {
    constructor(private readonly enterprisesService: EnterpriseService) { }

    @Post('create')
    @ApiOperation({ summary: 'Registra novas empresas' })
    @ApiResponse({ status: 200, description: 'Empresa registrada com sucesso.' })
    @ApiResponse({ status: 404, description: 'Empresa não registrada.' })
    async create(@Body() createEnterpriseDTO: CreateEnterpriseDto): Promise<CreateEnterpriseDto> {
        return this.enterprisesService.create(createEnterpriseDTO);
    }

    @Get()
    @ApiOperation({ summary: 'Lista empresas registradas' })
    @ApiResponse({ status: 200, description: 'Lista de empresas retornada com sucesso.' })
    @ApiResponse({ status: 404, description: 'Empresas não encontradas.' })
    async findAll(): Promise<Enterprise[]> {
        return await this.enterprisesService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Localiza empresa pelo id' })
    @ApiResponse({ status: 200, description: 'Empresa localizada com sucesso.' })
    @ApiResponse({ status: 404, description: 'Empresa não encontrada.' })
    async findById(@Param('id') id: string): Promise<Enterprise> {
        return await this.enterprisesService.findById(id);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Exclui registro da empresa pelo id' })
    @ApiResponse({ status: 200, description: 'Empresa excluida com sucesso.' })
    @ApiResponse({ status: 404, description: 'Empresa não encontrado.' })
    async delete(@Param('id') id: string): Promise<void> {
        await this.enterprisesService.delete(id);
    }
}
