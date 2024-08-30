import { InjectRepository } from "@nestjs/typeorm";
import { Enterprise } from "src/domain/entities/enterprise.entity";
import { IEnterpriseRepository } from "src/domain/interfaces/enterprise.interface";
import { Repository } from "typeorm";

export class EnterpriseRepository implements IEnterpriseRepository {
    constructor(
      @InjectRepository(Enterprise)
      private readonly enterpriseRepository: Repository<Enterprise>,
    ) {}

    async create(enterprise: Enterprise): Promise<Enterprise> {
        return this.enterpriseRepository.save(enterprise);
      }
}