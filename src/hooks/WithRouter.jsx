import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { routes, RootSubmenuKeys as handleRootSubmenuKeys } from "@/router";

// 可能以后要添加case
function matchRouterKeys(openKeys){
  switch (openKeys.length) {
    case 2:
      return [];
    case 3:
      return [`/${openKeys.slice(1, 2)}`];
    case 4:
      return [`/${openKeys.slice(1, 2)}`, `/${openKeys.slice(2, 3)}`];
    default:
      return [];
  }
}


export default function WithRouter(Component) {

  function ComponentWithRouterProp(props) {
    const [ openKeys, setOpenKeys ] = useState([]);
    const [location, navigate, params] = [useLocation(), useNavigate(), useParams()];
    const RootSubmenuKeys = handleRootSubmenuKeys(routes);
    function handleOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => openKeys.indexOf(key) === -1);
      if (RootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(openKeys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    }
    
    useEffect(() => {
      setOpenKeys(matchRouterKeys(location.pathname.split("/")));
    }, [location]);

    return <Component {...props} onOpenChange={handleOpenChange} router={{ location, navigate, params, openKeys }}/>;
  }

  return ComponentWithRouterProp;
}


