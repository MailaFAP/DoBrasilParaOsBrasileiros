import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnterpriseRepository } from './repositories/enterprise.respository';
import { AgriculturalCompany, Enterprise, ManufacturingCompany } from 'src/domain/entities/enterprise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enterprise])],
  controllers: [],
  providers: [EnterpriseRepository],
  exports: [EnterpriseRepository, TypeOrmModule]
})
export class InfrastructureModule {}