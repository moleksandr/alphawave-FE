import { FC } from "react";
// Components
import CreateTeamForm from "../../components/forms/CreateTeamForm/index"


const CreateTeamPage: FC = () => {
  return (
    <div className="w-screen h-screen bg-[#DDEBF7] flex items-center justify-center overflow-y-auto">
      <CreateTeamForm />
    </div>
    
  )
}

export default CreateTeamPage