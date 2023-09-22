import React from 'react'
import {data1} from '../../constants/parsed_data';
import ResumeView from '../../components/ResumeView';


export default function Page() {
    return (
      <div>
        <h1>Parsed Data View</h1>
        <ResumeView data={data1} />
      </div>
    );
}
