


type CategoryType = {
    id: number;
    name: string;
    };

type ActividadType = {
    id: string;
    category: number;
    actividad: string;
    calorias: number;
}


export type { CategoryType, ActividadType };