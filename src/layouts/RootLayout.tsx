import CommonFooter from "@/layouts/footers/CommonFooter";
import CommonHeader from "@/layouts/headers/CommonHeader";

import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
      <div className="flex min-h-full flex-col font-secondary">
          <CommonHeader />
          <main className="flex-1">
              <Outlet />
          </main>
          <CommonFooter />
      </div>
  );
};

export default RootLayout;
