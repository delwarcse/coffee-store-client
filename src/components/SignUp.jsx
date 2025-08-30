import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Sign Up Successful', name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const createdAt = result?.user?.metadata?.creationTime;
                const newUser = { name, email, createdAt }

                //save new user info to the database
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId){
                             console.log('user created to db', data);
                        }
                       
                    })

            })
            .catch(error => {
                console.log('error', error);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp </h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="name" className="input" name="name" placeholder="Name" />
                            <label className="label">Email</label>
                            <input type="email" className="input" name="email" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" name="password" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">SignUp or Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;