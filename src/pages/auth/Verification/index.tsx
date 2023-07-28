import {FC} from 'react'
import { VerificationForm } from '../../../components/forms/VerificationForm'

export const VerificationPage: FC = () => {
  return (
    <div className="w-screen h-screen bg-[#DDEBF7] flex sm:items-center items-start justify-center overflow-y-auto">
      <VerificationForm />
    </div>
    
  )
}