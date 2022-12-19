import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";

const Layouts = ({ children }: { children: ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    if (window.screen.width < 600) {
      setShowSidebar(false);
    }
  }, []);

  return (
    <div className="flex max-w-[100vw] bg-secondary">
      <Sidebar showSidebar={showSidebar} />
      <div className="w-full overflow-auto">
        <Navbar setShowSidebar={setShowSidebar} />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
