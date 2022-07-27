import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
  console.log(children)
  const navigate = useNavigate()
  const { data, isLogin } = useSelector((state) => state.auth);
  useEffect(() => {
    if (data.role !== "admin") {
      navigate('/', { replace: true })
    }
  }, [data.role, isLogin, navigate])
  return (children)
}

export default PrivateRoute