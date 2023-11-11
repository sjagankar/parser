import React, { useState, useEffect } from "react";
import { Form, Input, Button, Result, Card, Spin } from "antd";
import { useAuth, fetchData } from "@/utils/hooks";
import {activateAccount} from "@/services/apis";

import {useNavigate, useMatch} from "umi";

const Activation = () => {

    const { data, loading, runAsync: runActivate } = fetchData(activateAccount, true, []);
    const match = useMatch('/activation/:id');


    useEffect(() => {
        console.log("match", match);
        if (match && match.params && match.params.id) {
            runActivate({activation_key: match.params.id});
        }
    }
    , [match.params.id]);



  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const { profile } = useAuth();
  let navigate = useNavigate();
  
  

  return (
    <Spin spinning={loading}>
    <Result
      status="success"
      title="Account Verified!"
      subTitle="You can now login to your account."
      extra={[
        <Button
          type="primary"
          key="login"
          onClick={()=>navigate("/login", { replace: true })}
        >
          Login Now
        </Button>,
      ]}
    />
    </Spin>
  );
};

export default Activation;
