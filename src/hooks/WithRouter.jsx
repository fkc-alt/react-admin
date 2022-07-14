import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import store from '@/store';

/*
  目前可以匹配到二级SubMenu, 如需匹配嵌套更深的SubMenu, 可以在这里添加case
*/
function matchSubMenuKeys(openKeys) {
  switch (openKeys.length) {
    case 3:
      return [`/${openKeys.slice(1, 2)}`];
    case 4:
      return [`/${openKeys.slice(1, 2)}`, `/${openKeys.slice(1, 3).join('/')}`];
    default:
      return [];
  }
}

export default function WithRouter(Component) {

  function ComponentWithRouterProp(props) {
    const [openKeys, setOpenKeys] = useState([]);
    const [location, navigate, params] = [useLocation(), useNavigate(), useParams()];
    const handleOpenChange = (openKeys) => setOpenKeys(openKeys);

    useEffect(() => {
      NProgress.start();
      setOpenKeys(matchSubMenuKeys(location.pathname.split("/")));
      store.subscribe(() => {
        if (!store.getState().user.token && location.pathname !== '/login') {
          navigate(`/login?redirect=${location.pathname}`);
        }
      })
      NProgress.done();
    }, [location.pathname, navigate]);

    return <Component {...props} onOpenChange={handleOpenChange} router={{ location, navigate, params, openKeys }} />;
  }

  return ComponentWithRouterProp;
}


