import { Job } from 'bull';

interface JobInterface {
  text: string,
}

export default async function(job: Job<JobInterface>) {
  console.log(`Job ${job.id} in pid ${process.pid} got data:`, job.data);
  return 'OK';
}
