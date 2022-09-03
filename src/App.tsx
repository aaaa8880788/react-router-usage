import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";

import { items } from "./router";
import Routes from "./router";

function App() {
  const location = useLocation();
  const navigator = useNavigate();

  const MenuClickHandle = (e: any) => {
    navigator(e.key);
  };

  return (
    <div className="App">
      <Menu
        items={items}
        selectedKeys={[`${location.pathname}`]}
        style={{ width: 256 }}
        // defaultSelectedKeys={[`${location.pathname}`]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        onClick={(e) => MenuClickHandle(e)}
      />
      <Routes></Routes>
    </div>
  );
}

export default App;
