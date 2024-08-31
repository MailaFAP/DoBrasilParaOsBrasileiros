import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enterprise } from './domain/entities/enterprise.entity';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', // Especifica o caminho do arquivo .env
      isGlobal: true,      // Faz com que as variáveis estejam disponíveis globalmente
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
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
