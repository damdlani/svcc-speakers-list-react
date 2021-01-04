const withSpecialMessage = () => (Component) => (props) => {
  const specialMessage = "Cancelled talk on React at 10:00AM";

  return <Component specialMessage={specialMessage} {...props}></Component>
};

export default withSpecialMessage;