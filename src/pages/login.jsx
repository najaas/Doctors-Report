import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Login from '../components/Loginmain';
import Image from '../assets/login.jpg';

const LoginSchema = Yup.object().shape({
  username: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required')
});

const LoginPage = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      navigate('/');
    },
  });

  const reset = () => {
    navigate('/reset');
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='bg-cover w-full h-screen flex justify-center items-center' style={{backgroundImage: `url(${Image})`}}>
        <Login
          report={
            <h1 className='text-blue-500 text-xl h-[50px]'>Report Download Portal</h1>
          }
          center={
            <form
              onSubmit={formik.handleSubmit}
              className='bg-[#00D3EB] rounded-xl w-10/12 h-[250px] flex flex-col justify-evenly items-center'
            >
              <h1>Login</h1>
              <div className='flex flex-col w-10/12'>
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder='Enter email id'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  className={formik.touched.username && formik.errors.username ? 'border-red-500' : ''}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className='text-red-500 text-xs'>{formik.errors.username}</div>
                ) : null}
                
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={formik.touched.password && formik.errors.password ? 'border-red-500' : ''}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className='text-red-500 text-xs'>{formik.errors.password}</div>
                ) : null}
              </div>
              
              <button type="submit" className='text-white rounded-lg w-[100px] h-[30px] bg-blue-800'>SUBMIT</button>
              <h1 onClick={reset} className='cursor-pointer text-blue-800'>Reset Password</h1>
            </form>
          }
          number={
            <h1 className='text-blue-500 text-xl'>(+91) 9288008801</h1>
          }
          last={
            <div className='w-full h-[40px] flex'>
              <h1 className='text-xs'>I hereby agree and accept the </h1>
              <h1 className='text-xs text-blue-500'>Terms of service </h1>
              <h1 className='text-xs'> and</h1>
              <h1 className='text-xs text-blue-500'>Privacy policy</h1>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default LoginPage;
