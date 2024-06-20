import "./style.scss";

const ProgressBar = (props: any) => {
  const { completed } = props;

  const fillerStyles = {
    width: `${completed}%`,
  };

  return (
    <div className="progress">
      <div style={fillerStyles} className="filler">
        <span className="text">{"UNTIL PRICE INCREASE"}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
