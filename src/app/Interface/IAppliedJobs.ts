import { ICandidate } from "./ICandidate";
import { IJob } from "./IDataTypes";

export interface IAppliedJobs {
  id:number,
  jobId:number,
  job:IJob,
  candidateId:number,
  candidate?:ICandidate
}
