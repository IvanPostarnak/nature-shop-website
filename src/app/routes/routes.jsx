import { lazy } from "react";

const Posts = lazy(() => import("pages/Posts/Posts.page"));
const AboutUs = lazy(() => import("pages/AboutUs/AboutUs.page"));

export const PUBLIC_ROUTES = [
  {name: "Blog", path: "/blog/posts", element: <Posts/>, key: "posts-page"},
  {name: "About Us", path: "/about-us", element: <AboutUs/>, key: "about-us-page"}
];