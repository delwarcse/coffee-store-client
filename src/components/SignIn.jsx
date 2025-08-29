import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
  const {signInUser}=useContext(AuthContext);
   const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Sign In Successful', email, password);
        signInUser(email,password)
        .then(result=>{
          console.log(result.user)
        .catch(error=>{
          console.log(error);
        })
        })
   }
    return (
       <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignIn </h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" name="email" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" name="password" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">SignIn</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;