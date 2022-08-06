import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumsModule } from './albums/albums.module';
import { GenresModule } from './genres/genres.module';
import { BeatsModule } from './beats/beats.module';
import { YearsModule } from './years/years.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: +process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [process.env.TYPEORM_ENTITIES],
      synchronize: false,
      migrations: [process.env.TYPEORM_MIGRATIONS],
      cli: {
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
      },
    }),
    AlbumsModule,
    GenresModule,
    BeatsModule,
    YearsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
