import { Injectable } from "@nestjs/common";
import { FactoryEnterprise } from "../models/enterprises.models";

@Injectable()
export class IEnterpriseService{
    private enterprises: FactoryEnterprise[] = [];

    create(enterprise: FactoryEnterprise): FactoryEnterprise {
        this.enterprises.push(enterprise);
        return enterprise;
    }

    findAll(): FactoryEnterprise[] {
        return [...this.enterprises];
    }

    findOne(idAgriculturalCompany: string): FactoryEnterprise {
        const enterprise = this.enterprises.find((enterprise) => enterprise. === idAgriculturalCompany);
        return enterprise;
    }

}

