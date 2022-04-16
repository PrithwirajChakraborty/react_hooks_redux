import { useSelector } from "react-redux";
import { selectUser } from "../redux/useSlice";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../redux/useSlice";

function HandleUserDetails() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  if (user) {
    return user;
  } else {
    const token1 = localStorage.getItem("token");
    if (token1) {
      const user = jwt(token1);
      console.log(user.username);
      dispatch(
        login({
          name: user.username,
          phone: user.phone,
          user_id: user.user_id,
          email: user.email,
          user_type: user.user_type,
        })
      );
    } else {
      return null;
    }
  }
}
export default HandleUserDetails;


