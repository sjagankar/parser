import React from "react";
import { Card, Row, Col, Tabs } from "antd";
import Profile from "./Profile";
import Billing from "./Billing";
import APIKeys from "./APIKeys";
import {useAuth} from "@/utils/hooks";



const SettingTabs = () => {
    const {showRedeem} = useAuth();
    const tabItems = [
        {
          key : 'profile',
          label : 'Profile',
          children : <Profile/>
        },
        {
          key : 'billing',
          label : 'Billing',
          children : <Billing showRedeem={showRedeem}/>
        },
        {
          key : 'api_secret',
          label : 'API Keys',
          children : <APIKeys />
        },]
  return (
    <Tabs defaultActiveKey={showRedeem ? 'billing' : 'profile'} items={tabItems} tabPosition="left"/>
  );
}

export default SettingTabs;