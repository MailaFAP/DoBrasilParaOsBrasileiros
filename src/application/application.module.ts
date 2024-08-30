import { Module } from '@nestjs/common';
import { EnterpriseController } from './controllers/enterprise.controller';
import { DomainModule } from 'src/domain/domain.module';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
  imports: [DomainModule, InfrastructureModule],
  controllers: [EnterpriseController],
  providers: [],
  exports:[]
})
export class ApplicationModule {}
