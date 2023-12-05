import "../styles/ErrorTooltip.css"


const ErrorTooltip = ({errorNotification}) => {
  return (
    <>
        <div className={`${errorNotification ? "show" : ""} tooltiptext`}>Please enter a valid ID between 1 and 126!</div>
    </>
  );
}
export default ErrorTooltip