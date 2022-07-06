import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";

/*
  目前可以匹配到三级路由, 如果需要匹配更多的路由, 可以在这里添加case
*/ 
function matchRouterKeys(openKeys){
  switch (openKeys.length) {
    case 2:
      return [];
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
    const [ openKeys, setOpenKeys ] = useState([]);
    const [location, navigate, params] = [useLocation(), useNavigate(), useParams()];
    const handleOpenChange = (openKeys) => setOpenKeys(openKeys);

    useEffect(() => {
      setOpenKeys(matchRouterKeys(location.pathname.split("/")));
    }, [location]);

    return <Component {...props} onOpenChange={handleOpenChange} router={{ location, navigate, params, openKeys }}/>;
  }

  return ComponentWithRouterProp;
}


