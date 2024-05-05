import React from 'react';
import {Divider} from "antd";

const CreditsList = ({ creditsArray }) => {
  return (
    <div>
      {creditsArray.map((credit) => (
        <div key={credit.id}>
            <Divider />
          <p>Credits: {credit.credits}</p>
          <p>Valid till: {new Date(credit.end_date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

// Example usage


export default CreditsList;
