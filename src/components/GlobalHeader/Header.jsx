import React, { useContext } from "react";
import { inIframe, addHttps, isEmpty } from "@/utils/utils";
import LayoutWrapper from "@/components/LayoutWrapper";
import { useTheme } from "@/utils/theme";
import logo from '@/assets/logo.svg';

const GlobalHeader = () => {
  const theme = useTheme();

  const headerSection = (
    <div style={{ padding:"12px 0", textAlign:'center' }}>
      <span>
        <a
          href={`#`}
          style={{ fontSize: 24, fontWeight: 600, color: theme.colorPrimary }}
        >
          <img src={logo} style={{ height: '48px' }} />
        </a>
      </span>
    </div>
  );

  return !inIframe() ? headerSection : <></>;
};

export default LayoutWrapper(GlobalHeader);
