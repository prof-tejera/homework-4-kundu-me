const Screen = ({ value, stack }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: 300,
        height: 70,
        textAlign: "right",
        marginBottom: 10,
      }}
    >
      {value}
      <div
        style={{
          width: 300,
          height: 70,
          textAlign: "right",
          marginTop: 30,
        }}
      >
        {stack}
      </div>
    </div>
  );
};

export default Screen;
