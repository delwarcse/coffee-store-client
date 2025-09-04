import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const SignIn = () => {
  const {signInUser}=useContext(AuthContext);
   const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Sign In Successful', email, password);
        signInUser(email,password)
        .then(result=>{
          console.log(result.user);
          //update last login time
          const lastSignInTime = result?.user?.metadata?.lastSignInTime;
          const loginInfo={email,lastSignInTime};

          //Using axios (this is the good or best practice for PATCH Operation)
            axios.patch('http://localhost:5000/users',loginInfo)
            .then(data=>{
                console.log(data.data);
            })

          //Using fetch (this is the bad & worst practice for PATCH operation)
            // fetch(`http://localhost:5000/users`,{
            //     method:"PATCH",
            //     headers:{
            //         'content-type':'application/json'
            //     },
            //     body:JSON.stringify(loginInfo)
            // })
            // .then(res=>res.json())
            // .then(data=>{
            //     console.log('sign in info update in db',data);
            // })
            
         })
        .catch(error=>{
          console.log(error);
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