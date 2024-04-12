'use client'
import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data:any) => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the entire form data object
      });
      if (response.ok) {
        console.log('Data submitted successfully');
        // You can perform further actions here after successful submission
      } else {
        console.error('Failed to submit data');
        // Handle error cases here
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle network errors or other exceptions here
    }
  };
  


  return (
    <section className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/background.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply bg-opacity-60">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
        <span className="flex items-center mb-6 text-2xl font-semibold text-white">
          <Image className="mr-2" src="https://www.sparkouttech.com/web-stories/assets/logo.png" alt="Flowbite logo" width={200} height={200}/>
        </span>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div className="p-6 space-y-4 md:space-y-6 lg:space-y-8 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" {...register("email", { required: true })} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" {...register("password", { required: true })} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="flex items-center justify-between">
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in to your account</button>
              <p className="text-sm font-light text-center text-gray-500 dark:text-gray-300">
                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Don't have an account?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
