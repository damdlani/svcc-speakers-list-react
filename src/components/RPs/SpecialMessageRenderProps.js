export const SpecialMessageRenderProps = ({children}) => {
  return children({
    specialMessage: "React Class at 10:00AM CANCELLED",
  });
};