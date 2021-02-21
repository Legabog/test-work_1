import "./Input.css";

const Input = (props) => {
  return (
    <div className="input-wrapper" style={{ margin: props.margin }}>
      <div className="input">
        <div className="input__title">
          <span
            style={{
              color:
                props.authError || props.errorMessage.split("").length !== 0
                  ? "#EB1717"
                  : null,
            }}
          >
            {props.title}
          </span>
        </div>
        <input
          type={props.type}
          ref={props.useRef}
          value={props.value}
          onChange={props.changeHandler}
          onFocus={props.focusHandler}
          onBlur={props.blurHandler}
          style={{
            borderColor:
              props.authError || props.errorMessage.split("").length !== 0
                ? "#EB1717"
                : props.focus
                ? "#1877f2"
                : null,
            boxShadow: props.focus ? "0 0 0 2px #e7f3ff" : null,
          }}
        ></input>
        <div className="input__error-message">
          <span>{props.errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default Input;
