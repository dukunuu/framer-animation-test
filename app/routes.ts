import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("compliments", "routes/compliments.tsx"),
] satisfies RouteConfig;
