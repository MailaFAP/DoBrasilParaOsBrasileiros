import { InjectRepository } from "@nestjs/typeorm";
import { Enterprise } from "src/domain/entities/enterprise.entity";
import { IEnterpriseRepository } from "src/domain/interfaces/enterprise.interface";
import { Repository } from "typeorm";

export class EnterpriseRepository implements IEnterpriseRepository {
  constructor(
    @InjectRepository(Enterprise)
    private readonly enterpriseRepository: Repository<Enterprise>,
  ) { }

  async create(enterprise: Enterprise): Promise<Enterprise> {
    return this.enterpriseRepository.save(enterprise);
  }

  async findAll(): Promise<Enterprise[]> {
    return await this.enterpriseRepository.find();
  }

  async findById(id: string): Promise<Enterprise> {
    return await this.enterpriseRepository.findOneBy({ id });
  }

  async delete(id: string): Promise<void> {
    const enterprise = await this.enterpriseRepository.findOneBy({ id });
    if (enterprise) {
      await this.enterpriseRepository.remove(enterprise);
    }
  }
}