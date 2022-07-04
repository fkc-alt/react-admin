import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function WithRouter(Component) {

  function ComponentWithRouterProp(props) {
    const [location, navigate, params] = [useLocation(), useNavigate(), useParams()];
    return <Component {...props} router={{ location, navigate, params }}/>;
  }

  return ComponentWithRouterProp;
}
