import { ICandidate } from "./ICandidate";
import { IJob } from "./IDataTypes";

export interface IAppliedJobs {
  id:string,
  jobsId:string,
  job:IJob,
  candidateId:string,
  candidate:ICandidate,
}
