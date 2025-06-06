import React, { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {

  const { logIn, forgetPassword, googleLogin, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();


  const handleLogin = (e) => {
    e.preventDefault();

    // get data from input
    const form = e.target;
    const formData = new FormData(form);
    const logInData = Object.fromEntries(formData.entries());

    // Destructuring
    const { email, password } = logInData;

    // Log in
    logIn(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        toast.success("Successfully Logged In!")
        navigate(`${location.state ? location.state : "/"}`)
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });

  }


  // Handle forget password
  const handleForgetPassword = () => {
    const email = emailRef.current?.value;
    if (!email) {
      toast.error("Please enter your email before resetting password.");
      return;
    }
    // Forget password
    forgetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Please check your email");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  // Handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`)


      }).catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  }



  return (
    <div className='flex justify-center items-center gap-2 max-w-4xl mx-auto lg:mt-36 mt-20 mb-20 px-4 flex-col lg:flex-row rounded-2xl p-5 shadow-2xl'>

      {/* left */}
      <div>
        <img
          className='object-cover rounded-xl w-full h-full max-h-[600px]'
          src="/assets/images/pexels-aditya-aiyar-615049-1407305.jpg"
          alt="image"
        />
      </div>

      {/* right */}
      <div className=' flex items-center justify-center'>
        <div className="card bg-base-100 w-full max-w-sm">
          <div className="card-body">
            <h1 className='font-bold text-3xl mb-5'>Log In!</h1>
            <form onSubmit={handleLogin}>
              <label className="label">Email</label>
              <input
                type="email"
                ref={emailRef}
                name='email'
                className="input mb-4 w-full" placeholder="Email"
                required />

              <label className="label">Password</label>
              <input
                type="password"
                name='password'
                className="input w-full" placeholder="Password"
                required />

              <div onClick={handleForgetPassword} className='mt-2'><a className="link link-hover">Forgot password?</a></div>

              <div className="flex items-center gap-4 mt-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="font-bold text-gray-600">Or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              {/* Google login */}
              <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] my-5 w-full">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
              </button>

              <button type='submit' className="btn bg-[#1f7158] text-white py-4 w-full">Login</button>
            </form>

            {/* go to register */}
            <p className='mt-4 text-center'>Didn't have an account? Please <Link to={'/register'} className='font-semibold text-[#1f7158]'>Register.</Link></p>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Login;
