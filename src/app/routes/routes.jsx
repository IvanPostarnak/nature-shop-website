import { lazy } from "react";

const Posts = lazy(() => import("pages/Posts/Posts.page"));

export const PUBLIC_ROUTES = [
  {name: "Blog", path: "/blog/posts", element: <Posts/>, key: "posts-page"}
];