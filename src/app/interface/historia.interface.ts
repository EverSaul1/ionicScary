// To parse this data:
//
//   import { Convert } from "./file";
//
//   const historia = Convert.toHistoria(json);

export interface Historia {
  _id:                string;
  nameHistory:        string;
  descriptionHistory: string;
  history:            string;
  dateHistory:        Date;
  linkHistory:        string;
  imagesHistory:      string;
  category:           Category;
  __v:                number;
}

export interface Category {
  _id:          string;
  nameCategory: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toHistoria(json: string): Historia[] {
    return JSON.parse(json);
  }

  public static historiaToJson(value: Historia[]): string {
    return JSON.stringify(value);
  }
}
