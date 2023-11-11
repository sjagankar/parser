/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";
import { Outlet, matchRoutes, useParams } from "umi";
import { Layout, ConfigProvider, theme, Result } from "antd";
const { Content } = Layout;
import styles from "./index.less";

export default function PageLayout() {
  return (
    <div className={styles.layout}>
      <Layout>
        <GlobalHeader />
        <div>
          <Content className={styles.content}>
            <Outlet />
          </Content>
        </div>
        <div>
          <GlobalFooter />
        </div>
      </Layout>
    </div>
  );
}
