import { Controller, Get, Param, Post, Body, Put, Delete, Res } from '@nestjs/common';
import { RecetaService } from './receta.service';

@Controller('receta')
export class RecetaController {
    constructor(private readonly recetaService: RecetaService) {}

    // GET /receta
    @Get()
    async listar() {
        return this.recetaService.listar();
    }

    // GET /receta/:id
    @Get(':id')
    async buscarPorId(@Param('id') id: string) {
        // Mostramos en este handler un ejemplo de cómo adaptar la respuesta
        // según el resultado de la operación
        try {
            let resultado = await this.recetaService.buscarPorId(id);
            if (resultado) {
                return {ok: true, resultado: resultado};
            }
            throw new Error();
        } catch (Error) {
            return { ok: false, error: 'Error buscando receta' };
        }
    }

}
