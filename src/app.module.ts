import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecetaModule } from './receta/receta.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [RecetaModule,
    MongooseModule.forRoot('mongodb://ibai.site:27020/recetasV3')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
