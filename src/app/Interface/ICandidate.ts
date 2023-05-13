import { IAppliedJobs } from "./IAppliedJobs";
import { IJobSkills, ILocation, IQualification } from "./IDataTypes";

export interface ICandidate {
  id:number,
  name:string,
  profileImg:string,
  aboutMe:string,
  experience:string,
  currentCompany:string,
  phone:number,
  location:Location,
  experienceTime:number,
  expectedSalary:number,
  age:number,
  qualification:IQualification,
  candidateSkills?:ICandidateSkills[],
  userId:string,
  appliedJobs?:IAppliedJobs
}

export interface ICandidateSkills{
  id:number,
  candidateId:number,
  candidate:ICandidate,
  skillId:number,
  skills:ISkills
}

export interface ISkills{
  id:number,
  jobSkill:string,
  candidateSkills:ICandidateSkills,
  jobSkills:IJobSkills,
}
