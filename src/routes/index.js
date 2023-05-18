import { Routes, Route } from "react-router-dom";

import SharedLayout from "./SharedLayout";
import RequiresAuth from "./RequiresAuth";
import { authRoutes, contentRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

import { Home } from "../pages";

const Index = () => {
  return (
    <Routes>
      {authRoutes.map((route, idx) => (
        <Route key={idx} path={route.path} element={route.element} exact />
      ))}

      <Route element={<SharedLayout />}>
        <Route path="/" element={<Home />} index />
        <Route path="*" element={<div>Some Error occurred</div>} />
        {contentRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}

        <Route element={<RequiresAuth />}>
          {privateRoutes.map((route, idx) => (
            <Route key={idx} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export { Index };
