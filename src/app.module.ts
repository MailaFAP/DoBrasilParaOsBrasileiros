import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enterprise } from './domain/entities/enterprise.entity';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://default:fuEOoXeJ5T9P@ep-red-night-a46a6agi-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
      entities: [Enterprise],
      synchronize: true,
    }),
    ApplicationModule,
    DomainModule,
    InfrastructureModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
