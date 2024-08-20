import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "./loggingPOPUP.css"

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const signUpSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const LoggingPOPIP = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(isSignUp ? signUpSchema : loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
    reset(); // Optionally reset form fields after submission
  };

  return (
    <div className=" dash text-white m-auto  top-4  rounded-lg p-8 max-w-sm w-[90%]">
      <h1 className="text-2xl font-bold mb-6 text-center">{isSignUp ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`w-full p-2 border-2 crimson-border rounded ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block  mb-2">Password</label>
          <input
            type="password"
            id="password"
            {...register('password')}
            className={`w-full p-2 border-2 crimson-border rounded ${errors.password ? 'border-red-500' : ''}`}
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        {isSignUp && (
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword')}
              className={`w-full p-2 border-2 crimson-border rounded ${errors.confirmPassword ? 'border-red-500' : ''}`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>
        )}
        <button type="submit" className="w-full crimson-border border-2 shadow-inner text-white p-2 rounded ">
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <p className="mt-6 text-center">
        {isSignUp ? (
          <>
            Already have an account? <a href="#" onClick={() => setIsSignUp(false)} className="text-blue-500 hover:underline">Login</a>
          </>
        ) : (
          <>
            Don't have an account? <a href="#" onClick={() => setIsSignUp(true)} className="text-blue-500 hover:underline">Sign Up</a>
          </>
        )}
      </p>
      
    </div>
  );
};

export default LoggingPOPIP;
