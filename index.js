const Box = (props) => {
  //  Write your code here.
  const { className, contentText } = props;
  return (
    <div className={className}>
      <p className="message">{contentText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1>Boxes</h1>
    <div className="container">
      <Box className="box-container box-1" contentText="Small" />
      <Box className="box-container box-2" contentText="Medium" />
      <Box className="box-container box-3" contentText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
