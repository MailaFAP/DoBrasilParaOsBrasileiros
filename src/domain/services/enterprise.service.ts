import { Injectable } from "@nestjs/common";
import { Enterprise } from "../entities/enterprise.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEnterpriseDTto } from "src/application/dto/enterprise.create-dto";

@Injectable()
export class EnterpriseService {
    constructor(
        @InjectRepository(Enterprise)
        private enterpriseRepository: Repository<Enterprise>,
    ) { }

    async create(createEnterpriseDTO: CreateEnterpriseDTto): Promise<CreateEnterpriseDTto> {
        const enterprise = this.enterpriseRepository.create(createEnterpriseDTO);
        await this.enterpriseRepository.save(enterprise)
        return enterprise;
    }

    async findAll(): Promise<Enterprise[]> {
        return await this.enterpriseRepository.find();
    }

    async findById(id: string): Promise<Enterprise> {
        return await this.enterpriseRepository.findOneBy({ id }); 
    }

    async delete(id: string): Promise<void> {
        await this.enterpriseRepository.delete({ id });
    }
}

