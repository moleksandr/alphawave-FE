// Components
import { LoginForm } from '../../../components/forms/LoginForm';

// Export page
const LoginPage = (props: any) => {
  const { setIsLoggedIn } = props;

  return (
    <div className="w-screen h-screen bg-[#DDEBF7] flex items-center justify-center overflow-y-auto">
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default LoginPage;
