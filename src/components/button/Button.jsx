const Button = (props) => {
  return (
    <button className="button" onClick={props.handleClick}>
      <div className="w-6 h-6">{props.icon}</div>
    </button>
  );
};

export default Button;
