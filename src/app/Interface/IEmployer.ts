import { IJob } from "./IDataTypes";

export interface IEmployer {
  id:number,
  companyName:string,
  companyEmail:string,
  companyAbout:string,
  companyLogo:string,
  headquarters:string,
  industry:string,
  companyWebsite:string,
  companySize:number,
  jobOffered:IJob[],
  UserId:string
}

export interface ISearchEmployer{
  employerName?:string,
  headquarters?:string
}
