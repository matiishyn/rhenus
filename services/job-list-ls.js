export const saveJobList = jobList =>
  window.localStorage.setItem('JOB_LIST', JSON.stringify(jobList));

export const getJobList = () => {
  if (process.browser)
    return JSON.parse(window.localStorage.getItem('JOB_LIST')) || [];
  else return [];
};
