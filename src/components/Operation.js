const Operation = ({ value, ...props }) => {
  /** TODO: What happens when a user clicks an Operation, what do we want to pass to our parent? */
  return (
    <div
      style={{
        padding: 10,
        marginTop: 10,
        border: "1px solid black",
        width: 60,
      }}
    >
      <button {...props} value = {value}> {value} </button>
    </div>
  );
};

export default Operation;
