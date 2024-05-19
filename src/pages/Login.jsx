import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import googleLogo from '../assets/google-logo.svg'
import fbLogo from '../assets/facebook-log.svg'

export default function Login() {

    const [ErrorMessage, setErrorMessage] = useState('');

    const { signUpWithGmail, login } = useContext(AuthContext);

    console.log(signUpWithGmail)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    // login with google
    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
        }).catch((error) => console.log(error))
    }

    // login with email password
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        login(email, password).then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user);
            alert("Login successful!")
            navigate(from, { replace: true });
            // ...
        })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            });
    }

    return (

        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-100 bg-custom-color shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-10 py-20 bg-white shadow-lg sm:rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col items-center justify-center">
                        <img src={"public/logo.jpg" } alt="mongolain tiger work"  className="w-40 h-20"/>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required />
                                </div>
                                <div className="relative ">
                                    <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" required />
                                </div>
                                <div className='font-family: "EB Garamond", serif'>
                                    <p>{ErrorMessage ? <span className='text-blue-500 text-sm'>Имэйл эсвэл хэрэглэгчийн нэр буруу байна</span> : ''}</p>
                                    <p className='text-base mt-1'>Шинээр бүртгүүлэх <Link to='/create-user' className='underline text-blue-600'>Бүртгүүлэх</Link></p>

                                </div>
                                <div className="relative flex items-center justify-center ">
                                    <button type='submit' className="bg-custom-color text-white hover:bg-blue-700 rounded px-6 py-1" >Нэвтрэх </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* social login */}
                    <div>
                        <hr />
                        <div className="flex w-full items-center flex-col mt-5 gap-3">
                            <button onClick={handleRegister} className='block'> <img src={googleLogo} alt="" className='w-12 h-12 inline-block' />Google хаягаар нэвтрэх </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
