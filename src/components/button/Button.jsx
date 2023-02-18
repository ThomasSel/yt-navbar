const Button = (props) => {
  return (
    <div className="flex justify-center relative mx-1 first:ml-0 last:mr-0">
      <button className="button peer" onClick={props.handleClick}>
        <div className="w-6 h-6">{props.icon}</div>
      </button>
      {props.tooltip ? (
        <div className="button-tooltip invisible peer-hover:visible">
          {props.tooltip}
        </div>
      ) : null}
    </div>
  );
};

export default Button;
