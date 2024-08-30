import { Enterprise } from "../entities/enterprise.entity";

export interface IEnterpriseRepository {
    create(enterprise: Enterprise): Promise<Enterprise>;
    findAll(): Promise<Enterprise[]>;
    findById(id: string): Promise<Enterprise>;
    delete(id: string): Promise<void>;
}