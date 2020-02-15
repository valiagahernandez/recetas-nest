export declare class RecetaDto {
    id: string;
    titulo: string;
    comensales: number;
    preparacion: number;
    coccion: number;
    descripcion: string;
    imagen: string;
    elementos: [{
        ingrediente: string;
        cantidad: number;
        unidad: string;
    }];
}
