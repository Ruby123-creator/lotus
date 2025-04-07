import React from "react";
import RightDeskSidebar from "../../common/RightDeskSidebar.tsx";
import SidebarComp from "../Home/sidebar";

import DepositDetails from "./depositAmount";

// import DepositDetails from "./depositAmount.js";

const DepositComponent: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[94px]">
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
<SidebarComp/>
<div
      className="w-full lg:w-[50%] px-2 py-4 pt-[18px] my-[13px] lg:pt-0 lg:my-0"
      style={{ minHeight: "calc(-110px + 100dvh)" }}
    >
      <div></div>
      <div className="mx-2">
      <DepositDetails/>
     {/* <AccountDetails/> */}
      </div>
    </div>
<RightDeskSidebar/>
</div>
</div>
    </div>
    
  );
};

export default DepositComponent;
