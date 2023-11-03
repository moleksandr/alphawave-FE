// Dependencies
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios, { AxiosError } from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
// Components
import { TextInput } from '../../common/TextInput';
import { Checkbox } from '../../common/Checkbox';
import { API_URL } from '../../../utils/setting'

// Types
import { TEXT_INPUT_VARIANT } from '../../common/TextInput/types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthState, fetchGetCurrentUser, fetchLogin, fetchResendVerification} from '../../../redux/slices/authSlice';
import { RootState } from '../../../redux/store';

// Export component
export const LoginForm = (props: any) => {
  const [rememberMe, setRememberMe] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(8).required('Password is required'),
  });

  const Navigate = useNavigate()

  const {isAuth, isUserNotVerify}: AuthState = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const handleLogin =  (e: any) => {
    e.preventDefault()
   dispatch(fetchLogin({email: values.email, password: values.password}))
  };

  if (isAuth) {
    Navigate('/home')
  }

  const handleNewVerificationLink =  () => {
    const email = localStorage.getItem("email")
    dispatch(fetchResendVerification({email}))
  }

  const {
    errors,
    touched,
    values,
    handleSubmit,
    handleChange,
    resetForm
  } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: handleLogin,
  });
  
  return (
    <div>
 {
      !isUserNotVerify ? (
        <div className="max-w-[440px] min-h-[580px] w-full rounded-[35px] bg-white sm:border-[18px] border-[8px] border-[#00C5FF] py-12 mx-4">
        <img className={'w-[380px] mx-auto sm:block hidden'} src={'/images/logos/full-logo.png'} alt={'full-logo'} />
        <img className={'mx-auto sm:hidden block w-32'} src={'/images/logos/Logo-01.svg'} alt={'full-logo'} />
        <div className={'sm:px-[38px] px-6'}>
          <TextInput
            name={'email'}
            className={'flex-1 mt-[38px]'}
            label={
              <div className={'flex items-center mb-1'}>
                <img className={'w-6 h-6'} src={'/images/icons/user-icon.svg'} alt={'user icon'} />
                <p className={'text-[18px] font-semibold text-[#C8C5C5]'}>Email</p>
              </div>
            }
            variant={TEXT_INPUT_VARIANT.CONTAINED}
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextInput
            name={'password'}
            className={'flex-1 mt-[38px]'}
            label={
              <div className={'flex items-center mb-1'}>
                <img className={'w-6 h-6'} src={'/images/icons/key-icon.svg'} alt={'user icon'} />
                <p className={'text-[18px] font-semibold text-[#C8C5C5]'}>Password</p>
              </div>
            }
            variant={TEXT_INPUT_VARIANT.CONTAINED}
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            type={'password'}
          />
          <Checkbox
            className={'mt-[21px]'}
            checked={rememberMe}
            onClick={() => setRememberMe(prev => !prev)} label={'Remember me'}
          />
          <ToastContainer />
          <button className="w-full h-[49px] bg-[#00C5FF] rounded-[30px] text-[20px] font-bold text-white mt-5 mb-[19px]" onClick={handleLogin}>Log In</button>
          <a href={'#'} className={'text-[14px] font-semibold text-[#C8C5C5]'}>Lost your password?</a>
        </div>
      </div>
      ) : (
        <div className='flex rounded-[25px] overflow-hidden border-[5px] border-[#00C5FF] mx-4'>
        User with this Email is not verified
        <button className="block max-w-[282px] h-[49px] w-full bg-[#00C5FF] rounded-[30px] text-[20px] font-bold text-white mt-10 mb-[19px] mx-auto" onClick={handleNewVerificationLink}>Send verification link</button>
      </div>
      )
    }
    </div>
   
   
  );
};

