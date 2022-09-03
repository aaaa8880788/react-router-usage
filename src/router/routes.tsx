import { MenuProps, Spin } from "antd";
import { RouteObject } from "react-router-dom";
import { FC, lazy, LazyExoticComponent, Suspense } from "react";

type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const routes: Route[] = [
  {
    path: "/",
    component: lazy(() => import("../pages/test")),
  },
  {
    path: "/home",
    component: lazy(() => import("../pages/home")),
  },
  {
    path: "/about",
    component: lazy(() => import("../pages/about")),
    children: [
      {
        path: "mine",
        component: lazy(() => import("../pages/mine")),
      },
    ],
  },
];

export interface Route<T = any>
  extends Omit<RouteObject, "element" | "children"> {
  component: LazyExoticComponent<FC<T>>;
  children?: Route[];
}

export const withRoutes = (routes: Route[]): RouteObject[] => {
  const result: RouteObject[] = [];
  routes.forEach((item) => {
    const { component: Comp, children, ...reset } = item;
    const route = {
      ...reset,
      element: (
        <Suspense fallback={<Spin />}>
          <Comp />
        </Suspense>
      ),
      ...(Array.isArray(children) &&
        children.length > 0 && {
          children: withRoutes(children),
        }),
    };
    result.push(route);
  });
  return result;
};
