export type IJob= {
  id:number,
  icon:string,
  title:string,
  vacancy:number,
  description:string,
  responsibility:string,
  qualifications:string,
  status:JobStatus,
  type:JobType,
  companyDetail:string,
  startBudget:number,
  endBudget:number,
  startDate:Date,
  endDate:Date,
  location:string

}

export enum JobStatus {
  FullTime ,
  PartTime,
  Contract ,

}
export enum JobType{
  FullTime = 'full-time',
  PartTime = 'part-time',
  Contract = 'contract',
}
