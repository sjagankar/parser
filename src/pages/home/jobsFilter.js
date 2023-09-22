import React, { useState } from 'react';
import { Input, Checkbox, Select, Row, Col, Divider, Spin } from 'antd';
const { Search } = Input;
// import { distinctValuesOfKeyInArr, searchInObject } from '@/utils/utils';
import { formatMessage } from '@/utils/locale';
import { useControllableValue, useDebounceFn, useRequest } from 'ahooks';
import { getAllDepartmentsJobs, getAllJobTypesJobs, getAllLocationsJobs } from '../../services/careerpage';

const JobsFilter = (props) => {
  const [filters, setFilters] = useControllableValue(props);
  const {settings} = props;
  const { jobsGroupBy, isTalentPoolActive } = settings;
  const isJobsGrouped = jobsGroupBy != 'none' && jobsGroupBy != '';
  const onSearchValueUpdate = useDebounceFn(
    (e) =>{
      props.update.SetPageSize(isJobsGrouped ? 1000: 10)
      props.update.SetPage(1)
      setFilters({searchvalue:e.target.value})
    },{
      wait: 500
    }
  )
  // const {jobs} = props;

  const department_options = useRequest(()=>getAllDepartmentsJobs(props.settings.sett_id),{
    cacheKey: 'department_options',
    staleTime: 5000,
    manual:true,
  })

  const jobtypes_options = useRequest(()=>getAllJobTypesJobs(props.settings.sett_id),{
    cacheKey: 'jobtypes_options',
    staleTime: 5000,
    manual:true,
  })

  const locations_options = useRequest(()=>getAllLocationsJobs(props.settings.sett_id),{
    cacheKey: 'locations_options',
    staleTime: 5000,
    manual:true,
  })
  

  // const {department,city,jobtype, showRemoteOnly} = filters;
  // const [jobtype, setJobtype] = useState([]);
  // const [department, setDepartment] = useState();
  // const [city, setCity] = useState();
  // const [showRemoteOnly, setShowRemoteOnly] = useState(false);
  // const [searchvalue, setSearchvalue] = useState();
  // const [filteredJobs, setFilteredJobs] = useState([]);

  // const handleFilters = () => {
  //   let filteredJobs = jobs.filter(function (v, i) {
  //     return (
  //       (department && v['department'] !== null
  //         ? department.includes(v['department'].trim())
  //         : true) &&
  //       (city && v['city'] !== null ? city.includes(v['city'].trim()) : true) &&
  //       (jobtype && v['jobtype'] !== null
  //         ? jobtype.includes(v['jobtype'].trim())
  //         : true) &&
  //       (showRemoteOnly ? parseInt(v['is_remote_job']) === 1 : true) &&
  //       (searchvalue ? searchInObject(v, searchvalue) : true)
  //     );
  //   });
  //   setFilteredJobs(filteredJobs);
  // };

  return (
    <Row type="flex" justify="end" align="center" gutter={16} style={{padding:'24px 0'}}>
      <Col xs={12} sm={9}>
        <Search
          size='large'
          allowClear
          style={{ width: '100%', marginBottom: '12px' }}
          placeholder={formatMessage({
            id: 'jobdetails.searchjobs',
            defaultMessage: 'Search Jobs',
          })}
          onChange={onSearchValueUpdate.run}
        />
      </Col>

      <Col xs={12} sm={5}>
        <Select
          size='large'
          showSearch
          mode="multiple"
          allowClear
          loading={department_options.loading}
          onFocus={department_options.run}
          style={{ width: '100%' }}
          placeholder={formatMessage({
            id: 'jobdetails.department',
            defaultMessage: 'Department',
          })}
          notFoundContent={department_options.loading ? <Spin size="small" /> : null}
          optionFilterProp="children"
          maxTagCount={1}
          // onChange={(value) => setFilters({department:value})}
          onChange={(value) =>{
            props.update.SetPageSize(10)
            props.update.SetPage(1)
            setFilters({department:value})
          }}
          options={department_options.data ? department_options.data.map(i=>({ value: i.id, label: i.department_name })) : []}
          // options={distinctValuesOfKeyInArr(jobs, 'department').map(
          //   (dept) => ({ key: dept, value: dept }),
          // )}
        />
      </Col>

      <Col xs={12} sm={5}>
        <Select
          size='large'
          allowClear
          mode="multiple"
          onFocus={jobtypes_options.run}
          loading={jobtypes_options.loading}
          showSearch
          style={{ width: '100%' }}
          placeholder={formatMessage({
            id: 'jobdetails.jobtype',
            defaultMessage: 'Job Type',
          })}
          notFoundContent={jobtypes_options.loading ? <Spin size="small" /> : null}
          optionFilterProp="children"
          // onChange={(value) => setFilters({jobtype:value})}
          onChange={(value) =>{
            props.update.SetPageSize(10)
            props.update.SetPage(1)
            setFilters({jobtype:value})
          }}
          maxTagCount={1}
          // options={distinctValuesOfKeyInArr(jobs, 'jobtype').map(
          //   (dept) => ({ key: dept, value: dept }),
          // )}
          options={jobtypes_options.data ? jobtypes_options.data.map(i=> ({...i, label : i.name ? i.name : 'None' }) ) : []}
        ></Select>
      </Col>

      <Col xs={12} sm={5}>
        <Select
          size='large'  
          showSearch
          allowClear
          mode="multiple"
          loading={locations_options.loading}
          onFocus={locations_options.run}
          style={{ width: '100%' }}
          placeholder={formatMessage({
            id: 'jobdetails.location',
            defaultMessage: 'Location',
          })}
          notFoundContent={locations_options.loading ? <Spin size="small" /> : null}
          optionFilterProp="children"
          // onChange={(value) => setFilters({city:value})}
          onChange={(value) =>{
            props.update.SetPageSize(10)
            props.update.SetPage(1)
            setFilters({city:value})
          }}
          maxTagCount={1}
          dropdownRender={(menu) => (
            <div>
              {menu}
              <>
                <Divider style={{ margin: '4px 0 0' }} />
                <div
                  style={{
                    padding: '8px',
                    cursor: 'pointer',
                    backgroundColor: '#e5e5e542',
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <Checkbox
                  
                    onChange={(e) => setFilters({showRemoteOnly:e.target.checked}) }
                  >
                    Remote Jobs Only
                  </Checkbox>
                </div>
              </>
            </div>
          )}
          // options={distinctValuesOfKeyInArr(jobs, 'city').map((dept) => ({
          //   key: dept,
          //   value: dept,
          // }))}
          options={locations_options.data ? locations_options.data.map(i=>({...i, value: i.value.trim()})) : []}
        ></Select>
      </Col>
    </Row>
  );
};

export default JobsFilter;
