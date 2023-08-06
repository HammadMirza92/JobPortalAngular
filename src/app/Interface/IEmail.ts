import { ICandidate } from "./ICandidate"
import { IJob } from "./IDataTypes"
import { IEmployer } from "./IEmployer"

export interface IEmployerToCandidateEmail{
  id:string,
  companyId:string,
  employer?:IEmployer,
  candidateId:string
  candidate?:ICandidate,
  JobAppliedId:string,
  job:IJob
}
