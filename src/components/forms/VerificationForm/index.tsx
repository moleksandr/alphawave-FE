import { FC, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios, { AxiosError } from 'axios';
import { server } from '../../../utils/setting'
import {VerificationProps} from './types'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./VerificationForm.css";
import { useAuthContext } from "../../../contexts/AuthContext";

export const VerificationForm: FC = () => {

  const {verificationPayload} = useAuthContext()
  const [codeItem, setCodeItem] = useState<string[]>(["", "", "", "", ""]);

  const verificationCode = codeItem.join("");

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [codeExpiresTime, setCodeExpiresTime] = useState<number>(verificationPayload?.verificationCodeExpiresTime || 0);

  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  setTimeout(() => {
    setCodeExpiresTime(codeExpiresTime - 1);
  }, 1000);

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    const newCode = [...codeItem];
    newCode[index] = value.slice(0, 1);
    setCodeItem(newCode);

    if (value.length >= 1 && index < 4 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && index > 0 && codeItem[index] === "") {
      inputRefs.current[index - 1]?.focus();
      inputRefs.current[index - 1]?.setSelectionRange(1, 1);
    }
  };

  const handlePaste = (
    event: React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text");
    const newCode = [...codeItem];
    const inputLength = Math.min(pastedData.length, 5 - index);
    for (let i = 0; i < inputLength; i++) {
      newCode[index + i] = pastedData[i];
    }
    inputRefs.current[4]?.focus();
    setCodeItem(newCode);
  };

  const verifyFormSubmit = async () => {
    await axios.post(`${server}/users/verify`, {email: verificationPayload?.email, verificationCode: verificationCode}).then((response) => {
      toast.success("User created successfully")

      navigate('/verification-done')
    }).catch((error: AxiosError) => {
      console.log(error.response?.data)
      if (error.response?.status == 409) {
        toast.warning("Account already exist")
      } else if (error.response?.status == 400) {
        toast.error("Input Error")
      } else if (error.response?.status == 500) {
        toast.error("Internal server error")
      }
    })
  };

  const handleResendVerificationCode = async () => {
    await axios.post(`${server}/users/resend-verification`, {email: verificationPayload?.email}).then((response) => {
      toast.success("success")
      setCodeExpiresTime(verificationPayload?.verificationCodeExpiresTime || 0)

    }).catch((error: AxiosError) => {
      console.log(error.response?.data)
      if (error.response?.status == 400) {
        toast.error("Input Error")
      } else if (error.response?.status == 500) {
        toast.error("Internal server error")
      }
    })
  }

  return (
    <div>
      <form
        action=""
        className="verification-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div
          className="verification-form-error error"
          style={{ display: error != "" ? "block" : "none" }}
        >
          {error}
        </div>
        <div className="verification-form-wrapper">
          <div className="verification-form-item">
            <input
              type="text"
              className="verification-form-input"
              maxLength={1}
              value={codeItem[0]}
              onChange={(event) => handleInput(event, 0)}
              onKeyDown={(event) => handleKeyDown(event, 0)}
              onPaste={(event) => handlePaste(event, 0)}
              ref={(input) => {
                inputRefs.current[0] = input;
              }}
            />
            <input
              type="text"
              className="verification-form-input"
              maxLength={1}
              value={codeItem[1]}
              onChange={(event) => handleInput(event, 1)}
              onKeyDown={(event) => handleKeyDown(event, 1)}
              onPaste={(event) => handlePaste(event, 1)}
              ref={(input) => {
                inputRefs.current[1] = input;
              }}
            />
            <input
              type="text"
              className="verification-form-input"
              maxLength={1}
              value={codeItem[2]}
              onChange={(event) => handleInput(event, 2)}
              onKeyDown={(event) => handleKeyDown(event, 2)}
              onPaste={(event) => handlePaste(event, 2)}
              ref={(input) => {
                inputRefs.current[2] = input;
              }}
            />
            <input
              type="text"
              className="verification-form-input"
              maxLength={1}
              value={codeItem[3]}
              onChange={(event) => handleInput(event, 3)}
              onKeyDown={(event) => handleKeyDown(event, 3)}
              onPaste={(event) => handlePaste(event, 3)}
              ref={(input) => {
                inputRefs.current[3] = input;
              }}
            />
            <input
              type="text"
              className="verification-form-input"
              maxLength={1}
              value={codeItem[4]}
              onChange={(event) => handleInput(event, 4)}
              onKeyDown={(event) => handleKeyDown(event, 4)}
              onPaste={(event) => handlePaste(event, 4)}
              ref={(input) => {
                inputRefs.current[4] = input;
              }}
            />
          </div>
          <div className="verification-code-resend">
            {codeExpiresTime > 0 ? (
              <div>
                Send code again via{" "}
               <span className="code-expires-time">
                 {Math.floor(codeExpiresTime / 60)}:
                 {codeExpiresTime % 60 >= 10
                   ? codeExpiresTime % 60
                   : `0${codeExpiresTime % 60}`}
               </span>
              </div>

            ) : (
              <button onClick={() => handleResendVerificationCode()}>Resend Verification Code</button>
            )
          }
           
          </div>
          <button
            className="button verification-button"
            onClick={verifyFormSubmit}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};


