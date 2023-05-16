import { IAppliedJobs } from "./IAppliedJobs";
import { ICandidate, ISkills } from "./ICandidate";
import { IEmployer } from "./IEmployer";

export interface IJob {
  id:string,
  icon:string,
  title:string,
  description:string,
  responsibility:string,
  location:Location
  type:IJobType,
  qualifications:IQualification,
  salaryType:ISalaryType,
  startBudget:number,
  endBudget:number,
  jobExperience:IJobExperience,
  shift:IJobShift,
  status:IJobStatus,
  deadLine:Date,
  jobPosted:Date,
  vacancy:number,
  employer:IEmployer
  employerId:string
  allJobsClasses: IAllJobClasses[];
  jobSkills:IJobSkills,
  appliedJobs?:IAppliedJobs[]
}
export interface IJobSkills{
  id:string,
  jobId:string,
  job:IJob,
  skillId:string,
  skill:ISkills
}
export interface IAllJobClasses {
  jobId: string;
  job?:IJob;
  jobClassId: string;
  jobClass: JobClass;
}
export interface JobClass {
  id: string;
  name: IJobClasses;
  allJobsClasses: IAllJobClasses;
}

export interface IUserCredentials{
  email:string,
  password:string
}
export interface IAuthenticationResponse{
  token:string,
  user:any,
  role:string,
  employerId?:string,
  employer?:IEmployer,
  candidateId?:string,
  candidate?:ICandidate
  expiration:Date,
}

// Enums
export enum IJobStatus
{

  Open = 0,
  Close = 1
}
export enum IJobType
{
  FullTime ,
  Freelance ,
  Contract ,
  Internship ,
  Temporary ,
  PartTime
}
export enum ILocation
{
  Lahore = 0,
  Islamabad = 1,
  Karachi = 2,
  Multan = 3,
  Hydarabad = 4,
  Gujranwala = 5,
  Faisalabad = 6,
  Sialkot = 7,
  Peshawar = 8
}
export enum IQualification
{
  Bachelor = 0,
  Master = 1,
  PHD = 2
}
export enum ISalaryType
{
  Monthly = 0,
  Weekly = 1,
  Hourly = 2,
  Yearly = 3

}
export enum IJobSalary
{
  JobSalary = 0,
  Weekly = 1,
  Hourly = 2,
  Yearly = 3
}
export enum IJobExperience
{
  Fresh = 0,
  Oneyear = 1,
  Twoyears = 2,
  Threeyears = 3,
  Fouryears = 4,
  Fiveyears = 5,
  AboveFive = 6,
}
export enum IJobShift
{
  Morning = 0,
  Evening = 1,
  Night = 2,
  Round = 3,

}
export enum IJobClasses
{
  Feature = 0,
  Urgent = 1,
  Private = 2,
}
