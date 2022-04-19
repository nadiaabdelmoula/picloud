import {ImageVideo} from "../../shared/model/imageVideo";

export interface IMobilier{
  id?: number;
  titre?: string;
  description?: string;
  etatMobilier?: string;
  date?: Date;
  prix?: number;
  status?: boolean;
  idAchteur?: number;
  imageVideo?: ImageVideo[];
  placeholder?: string;

}




export class Mobilier implements IMobilier {
  constructor(
    public id?: number,
    public   titre?: string,
    public description?: string,
    public etatMobilier?: string,
    public prix?: number,
    public date?: Date,
    public idAchteur?: number,
    public status?:boolean,
    public imageVideo?: ImageVideo[],
    public placeholder?: string
  ) {
  }
}
