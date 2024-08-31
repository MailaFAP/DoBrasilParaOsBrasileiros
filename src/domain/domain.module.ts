import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { Enterprise } from './entities/enterprise.entity';
import { EnterpriseService } from './services/enterprise.service';

@Module({
  imports: [
    InfrastructureModule, 
    TypeOrmModule.forFeature([Enterprise])],
  controllers: [],
  providers: [EnterpriseService],
  exports: [EnterpriseService],
})
export class DomainModule {}
