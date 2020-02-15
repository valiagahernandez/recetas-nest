import { Module } from '@nestjs/common';
import { RecetaController } from './receta.controller';
import { RecetaService } from './receta.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetaSchema } from './schemas/receta.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Receta', schema: RecetaSchema }])],
  controllers: [RecetaController],
  providers: [RecetaService],
})
export class RecetaModule {}
