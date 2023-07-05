import { lazy } from "react";

const Posts = lazy(() => import("pages/Posts/Posts.page"));
const AboutUs = lazy(() => import("pages/AboutUs/AboutUs.page"));
const PrivacyPolicy = lazy(() => import("pages/PrivacyPolicy/PrivacyPolicy.page"));

export const NAVBAR = [
  {name: "Blog", path: "/blog/posts", element: <Posts/>, key: "posts-page"},
  {name: "About Us", path: "/about-us", element: <AboutUs/>, key: "about-us-page"}
]

export const FOOTER = [
  {name: "Privacy Policy", path: "/privacy-policy", element: <PrivacyPolicy/>, key: "privacy-policy-page"},
]

export const PUBLIC_ROUTES = [
  ...NAVBAR,
  ...FOOTER
];

export const PRIVATE_ROUTES = [
  ...PUBLIC_ROUTES
];