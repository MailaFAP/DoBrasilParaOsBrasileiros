import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

@Injectable()
export class PostgresConfigService implements TypeOrmModuleOptions{
    createTypeOrmOptions():TypeOrmModuleOptions{
        return {
            type: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            username:'root',
            password: 'root',
            database:'loja',
            entities: [],
            synchronize: true
        }
    }
}