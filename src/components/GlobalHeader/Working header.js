import React, { useContext, useState } from "react";
import { inIframe, addHttps, isEmpty } from "@/utils/utils";
import LayoutWrapper from "@/components/LayoutWrapper";
import { useTheme } from "@/utils/theme";
import logo from "@/assets/logo.svg";
import { Button, Flex, Space } from "antd";
import FreeTrialModal from "../FreeTrialForm/FreeTrialModal";
import Profile from "./Profile";
import { useNavigate } from "umi";
import { useAuth } from "@/utils/hooks";

const headerStyle = {
  // backgroundColor: '#dee0e3',
  backgroundColor: "#fff",
  padding: "6px 36px",
  marginBottom: 24,
};

const GlobalHeader = () => {
  let navigate = useNavigate();
  const theme = useTheme();
  const { isLogin, profile } = useAuth();

  const headerSection = (
    <div style={headerStyle}>
      <Flex justify={"space-between"} align={"center"}>
        <Space align="center">
          <a
            href={"#"}
            onClick={(e) => {
              e.preventDefault();
              isLogin
                ? navigate("/documents", { replace: true })
                : navigate("/", { replace: true });
            }}
            style={{ fontWeight: 600, color: theme.colorPrimary }}
          >
            <img src={logo} alt="Logo" style={{ height: "36px" }} />
          </a>
          { isLogin && (
            <Button
              type="link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/resumes", { replace: true });
              }}
              style={{ fontWeight: 600 }}
            >
              Resume Parser
            </Button>
          )}

          {false && isLogin && (
            <Button
              type="link"
              onClick={(e) => {
                e.preventDefault();
                navigate("/documents", { replace: true });
              }}
              style={{ fontWeight: 600 }}
            >
              Documents
            </Button>
          )}
        </Space>
        {isLogin ? (
          <Profile profile={profile} avatarUrl={null} />
        ) : (
          <FreeTrialModal />
        )}
      </Flex>
    </div>
  );

  return !inIframe() ? headerSection : <></>;
};

export default LayoutWrapper(GlobalHeader);
