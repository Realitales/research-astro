interface Routes {
  name: string;
  path: string;
}

//Use this file to add and modify routes.

export const routes: Routes[] = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "test-ground",
    path: "/test-ground",
  },
  {
    name: "cars",
    path: "/cars",
  },
];

export default routes;
