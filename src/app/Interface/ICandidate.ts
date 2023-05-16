import { IAppliedJobs } from "./IAppliedJobs";
import { IJobSkills, ILocation, IQualification } from "./IDataTypes";

export interface ICandidate {
  id:string,
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
  id:string,
  candidateId:string,
  candidate:ICandidate,
  skillId:string,
  skills:ISkills
}

export interface ISkills{
  id:string,
  jobSkill:string,
  candidateSkills:ICandidateSkills,
  jobSkills:IJobSkills,
}
