import { Navigate } from "react-router-dom";
import SignupWizard from "../components/signup/SignupWizard";
const Signup = () => {
  const signupProfile = sessionStorage.getItem("signupProfile");

  if (signupProfile) {
    return <Navigate to="/welcome" replace />;
  }
  return <SignupWizard />;
};

export default Signup;
