import { lazy } from "react";

const Posts = lazy(() => import("pages/Posts/Posts.page"));

export const publicRoutes = [
  {path: "/blog/posts", element: <Posts/>, key: "posts-page"}
];