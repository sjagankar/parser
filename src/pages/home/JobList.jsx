import React, { useContext, useEffect, useState } from 'react';
import { useRequest, useSetState } from 'ahooks';
import { getEmployerJobs } from '@/services/careerpage';
import { SettingsContext } from "@/layouts";
import JobListCard from '@/components/JobListCard';
import DiscoverApplyCard from '@/components/DiscoverApplyCard';
import PageLoading from '@/components/PageLoading';
import LayoutWrapper from '@/components/LayoutWrapper';
import BrandAboutSection from '@/components/BrandAboutSection';
import { formatMessage } from '@/utils/locale';
import { groupBy, distinctValuesOfKeyInArr, searchInObject } from '@/utils/utils';
import { Divider, Empty } from 'antd';
import JobsFilter from './jobsFilter';

const JobList = () => {
  const urlparams = new URLSearchParams(window.location.search)
  const settings = useContext(SettingsContext);
  const { jobsGroupBy, isTalentPoolActive } = settings;
  const isJobsGrouped = jobsGroupBy != 'none' && jobsGroupBy != '';
  //const isJobsGrouped = false;
  const [page,SetPage] = useState(isJobsGrouped ? 1 : parseInt(urlparams.get('page') ?? 1))
  const [pageSize,SetPageSize] = useState(isJobsGrouped ? 1000 : parseInt(urlparams.get('pageSize') ?? 10))
  const [loading,setLoading] = useState(true)

  const pagination = {
    page,
    pageSize,
    onChange: (p,s)=>{
      SetPage(p)
      SetPageSize(s)
    }
  }

  const [filters, setFilters] = useSetState({
    department: [],
    city: [],
    jobtype: [],
    showRemoteOnly: false,
    searchvalue: ''
});

  const { data, loading:reloading } = useRequest(() => getEmployerJobs(settings.sett_id, pagination, filters), {
    cacheKey: 'departments_job',
    staleTime: 300,
    refreshDeps: [page,pageSize, filters],
  });

  pagination.current = page
  pagination.total = data?.total ?? 0

useEffect(()=>{
  !reloading && loading && setLoading(false)
},[reloading,loading])

// const {department, city, jobtype, showRemoteOnly, searchvalue} = filters;
  const filteredJobs = data?.data ? data.data: [];
// department
  // let filteredJobs = data?.data ? data.data.filter(function (v, i) {
  //     return (
  //       (department && department.length>0 && v['department'] !== null
  //         ? department.includes(v['department'].trim())
  //         : true) &&
  //       (city && city.length>0 && v['city'] !== null ? city.includes(v['city'].trim()) : true) &&
  //       (jobtype && jobtype.length>0 && v['jobtype'] !== null
  //         ? jobtype.includes(v['jobtype'].trim())
  //         : true) &&
  //       (showRemoteOnly ? parseInt(v['is_remote_job']) === 1 : true) &&
  //       (searchvalue ? searchInObject(v, searchvalue) : true)
  //     );
  //   }) : [];


  return (
    <div>
      {loading && <PageLoading />}
      {!loading &&
        <>
          <BrandAboutSection settings={settings} />
          <JobsFilter settings={settings} update={{SetPage,SetPageSize}} jobs={data.data} filters={filters} onChange={setFilters}/>
          {jobsGroupBy != 'none' &&
            distinctValuesOfKeyInArr(filteredJobs, jobsGroupBy).map((dept, index) => (
              <JobListCard loading={reloading} settings={settings} key={index} JobsData={groupBy(filteredJobs, jobsGroupBy)[dept]} dept={dept} group={jobsGroupBy} index={index} />
            ))
          }
          {jobsGroupBy != 'none' && filteredJobs.length===0 &&
              <Empty description='Sorry! Currently, we do not have any job opening.'/>
          }

          {(jobsGroupBy == '' || jobsGroupBy == 'none') && <JobListCard loading={reloading} pagination={pagination} settings={settings} JobsData={filteredJobs} dept={formatMessage({ id: 'jobdetails.currentopenings', defaultMessage: 'Current Openings' })} group={'none'} index={0} />}
          {parseInt(isTalentPoolActive)===1 && <div> <Divider /><div><DiscoverApplyCard settings={settings} spanIcon={3} spanDesc={16} spanBtn={5} bordered={true} /></div></div>}
        </>
      }

    </div>
  )
};

const JobListWrapped = LayoutWrapper(JobList, { paddingBottom: '24px' });
export default JobListWrapped;