import Button from "../../pres-components/Button/Button";
import Input from "../../pres-components/Input/Input";
import "./AuthForm.css";
import { useInput } from "../../hooks/useInput";
import { useState } from "react";
import is from "is_js";

const AuthForm = (props) => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [
    email,
    emailRef,
    emailChangeHandler,
    emailFocus,
    emailFocusHandler,
    emailBlurHandler,
  ] = useInput("");

  const [
    password,
    passwordRef,
    passwordChangeHandler,
    passwordFocus,
    passwordFocusHandler,
    passwordBlurHandler,
  ] = useInput("");

  const emailValidation = (email) => {
    if (email.trim().split("").length === 0) {
      setEmailError("Введите email");
    } else {
      if (!is.email(email)) {
        setEmailError("Неверный формат почты");
      } else {
        return true;
      }
    }
  };

  const passwordValidation = (password) => {
    if (password.trim().split("").length === 0) {
      setPasswordError("Введите пароль");
    } else {
      if (password.trim().split("").length < 8) {
        setPasswordError("Длина пароля меньше 8 символов");
      } else {
        if (/[а-яА-ЯЁё]/.test(password.trim())) {
          setPasswordError("Пароль не должен содержать кириллицу");
        } else {
          return true;
        }
      }
    }
  };

  const resultValidation = () => {
    const resulValidation_1 = emailValidation(email);
    const resulValidation_2 = passwordValidation(password);
    return resulValidation_1 && resulValidation_2;
  };

  const loginButtonSignInHandler = () => {
    if (resultValidation()) {
      console.log(email, password);
      props.signIn(email, password);
      setEmailError("");
      setPasswordError("");
    }
  };

  return (
    <div className={"auth-form-wrapper"}>
      <div className={"auth-form"}>
        <div className={"auth-form__title"}>
          <span>{props.title}</span>
        </div>
        <Input
          title={"Логин:"}
          type={"text"}
          value={email}
          useRef={emailRef}
          focus={emailFocus}
          margin={"16px 33px"}
          changeHandler={emailChangeHandler}
          focusHandler={emailFocusHandler}
          blurHandler={emailBlurHandler}
          errorMessage={emailError}
          authError={props.authError}
          resultValidation={resultValidation}
        />
        <Input
          title={"Пароль:"}
          type={"password"}
          margin={"25px 33px"}
          value={password}
          useRef={passwordRef}
          focus={passwordFocus}
          changeHandler={passwordChangeHandler}
          focusHandler={passwordFocusHandler}
          blurHandler={passwordBlurHandler}
          errorMessage={passwordError}
          authError={props.authError}
        />

        <Button
          email={email}
          password={password}
          title={"Войти"}
          onClick={loginButtonSignInHandler}
          authFetching={props.authFetching}
        />
      </div>
    </div>
  );
};

export default AuthForm;
