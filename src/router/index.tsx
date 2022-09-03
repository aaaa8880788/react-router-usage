import { MenuProps } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useRoutes } from "react-router-dom";

import { routes, withRoutes } from "./routes";
import { getItem } from "./routes";

export const items: MenuProps["items"] = [
  getItem("菜单", "sub1", <MailOutlined />, [
    getItem("首页", "/home"),
    getItem("关于", "/about"),
  ]),
];

const Routes = () => useRoutes(withRoutes(routes));

export default Routes;
