import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { AgriculturalCompany, Enterprise, ManufacturingCompany } from './entities/enterprise.entity';
import { EnterpriseService } from './services/enterprise.service';

@Module({
  imports: [
    InfrastructureModule, 
    TypeOrmModule.forFeature([Enterprise, AgriculturalCompany, ManufacturingCompany])],
  controllers: [],
  providers: [EnterpriseService],
  exports: [EnterpriseService],
})
export class DomainModule {}
