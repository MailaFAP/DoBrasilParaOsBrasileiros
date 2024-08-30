import { Enterprise } from "../entities/enterprise.entity";

export interface IEnterpriseRepository {
    create(enterprise: Enterprise): Promise<Enterprise>;
}