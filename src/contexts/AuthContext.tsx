// Dependencies
import {useState, createContext, useContext, FC, Dispatch, SetStateAction} from 'react';

// Types
type VerficationPayload = {
  email: string;
  verificationCodeExpiresTime: number
}

interface AuthContextProps {
  verificationPayload: VerficationPayload | undefined;
  addVerificationPayload: (email: string, verificationCodeExpiresTime: number) => void;
}

const initialValues = {
  verificationPayload: {
    email: "",
    verificationCodeExpiresTime: 0
  },
  addVerificationPayload: () => {},
}

const AuthContext = createContext<AuthContextProps>(initialValues);

export const AuthProvider: FC<any> = ({ children }) => {
  const [verificationPayload, setVerificationPayload] = useState<VerficationPayload>()

  const addVerificationPayload = (email: string, verificationCodeExpiresTime: number) => {
    setVerificationPayload(
      {email: email, verificationCodeExpiresTime: verificationCodeExpiresTime})
  }
  const value = {
    verificationPayload,
    addVerificationPayload,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
}
