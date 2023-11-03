import { FC } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from "react";
// Components
import { TextInput } from "../../common/TextInput";
import { TEXT_INPUT_VARIANT } from "../../common/TextInput/types";
import { createTeam } from "../../../service/TeamsService";

const CreateTeamForm: FC = () => {
  const CreateTeamSchema= Yup.object().shape({
    jobTitle: Yup.string().required('Job Title is required'),
    managerName: Yup.string().min(2).required('Manager Name is required'),
    teamName: Yup.string().min(2).required('Team Name is required')
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('access_token')
    if (token) {
      localStorage.setItem('access_token', token)

      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])

  const handleCreateTeam = async () => {
      try {
       const response = await createTeam(values.teamName, values.jobTitle)
       window.location.pathname = "/home"
      } catch(error: any) {
       if (error.response?.status === 400) { 
             toast.error("Input Error")
        }
      }
    
  }

  const {
    errors,
    values,
    handleChange,
    resetForm,
    handleSubmit,
    touched
  } = useFormik({
    initialValues: {
      jobTitle: "",
      managerName: "",
      teamName: "",
    },
    validationSchema: CreateTeamSchema,
    onSubmit: handleCreateTeam
  })
  return (
    <div>
        <div className="max-w-[440px] min-h-[580px] w-full rounded-[35px] bg-white sm:border-[5px] border-[5px] border-[#00C5FF] py-12 mx-4">
        <img className={'w-[380px] mx-auto sm:block hidden'} src={'/images/logos/full-logo.png'} alt={'full-logo'} />
        <p className={'sm:text-[28px] text-[21px] font-semibold text-[#01174F] mt-5 text-center'}>Finish Registration</p>
        <img className={'mx-auto sm:hidden block w-32'} src={'/images/logos/Logo-01.svg'} alt={'full-logo'} />
        <div className={'sm:px-[38px] px-6'}>
          <TextInput
            name={'jobTitle'}
            className={'flex-1 mt-[38px]'}
            label={
              <div className={'flex items-center mb-1'}>
                <p className={'text-[18px] font-semibold text-[#C8C5C5]'}>Job Title</p>
                <img className={'w-4 h-4 ml-1 cursor-pointer'} src={'/images/icons/help-icon.svg'} alt={'user icon'} title="something help"  />
              </div>
            }
            variant={TEXT_INPUT_VARIANT.CONTAINED}
            value={values.jobTitle}
            onChange={handleChange}
            error={errors.jobTitle}
          />
          <TextInput
            name={'managerName'}
            className={'flex-1 mt-[38px]'}
            label={
              <div className={'flex items-center mb-1'}>
                <p className={'text-[18px] font-semibold text-[#C8C5C5]'}>Manager Name</p>
                <img className={'w-4 h-4 ml-1 cursor-pointer'} src={'/images/icons/help-icon.svg'} alt={'user icon'} title="something help"  />
              </div>
            }
            variant={TEXT_INPUT_VARIANT.CONTAINED}
            value={values.managerName}
            onChange={handleChange}
            error={errors.managerName}
          />
          <TextInput
            name={'teamName'}
            className={'flex-1 mt-[38px]'}
            label={
              <div className={'flex items-center mb-1'}>
                <p className={'text-[18px] font-semibold text-[#C8C5C5]'}>Your Team Name</p>
                <img className={'w-4 h-4 ml-1 cursor-pointer'} src={'/images/icons/help-icon.svg'} alt={'user icon'} title="something help"  />
              </div>
            }
            variant={TEXT_INPUT_VARIANT.CONTAINED}
            value={values.teamName}
            onChange={handleChange}
            error={errors.teamName}
          />
          {/* <ToastContainer /> */}
          <button className="w-full h-[49px] bg-[#00C5FF] rounded-[30px] text-[20px] font-bold text-white mt-5 mb-[19px]" onClick={handleCreateTeam}>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default CreateTeamForm