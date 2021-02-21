import "./Button.css";

const Button = (props) => {
  const clickHandler = () => {
    props.onClick(props.email, props.password);
  };

  return (
    <div className="button-wrapper">
      {props.authFetching ? (
        <div className="button-preloader">
          <img
            className="registration-block-loader"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/vF9DX0rAdyp.gif"
            alt="loader"
          />
        </div>
      ) : (
        <button onClick={clickHandler}>
          <span>{props.title}</span>
        </button>
      )}
    </div>
  );
};

export default Button;
