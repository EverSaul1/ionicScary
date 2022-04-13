// To parse this data:
//
//   import { Convert, Categoria } from "./file";
//
//   const categoria = Convert.toCategoria(json);

export interface Categoria {
    data: List[];
}

export interface List {
    _id:            string;
    nameCategory:   string;
    __v:            number;
    imageCategory?: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toCategoria(json: string): Categoria {
        return JSON.parse(json);
    }

    public static categoriaToJson(value: Categoria): string {
        return JSON.stringify(value);
    }
}
