import "../styles/ErrorTooltip.css"


const ErrorTooltip = ({errorNotification, errorText}) => {
  return (
    <>
        <div className={`${errorNotification ? "show" : ""} tooltiptext`}>{errorText}</div>
    </>
  );
}
export default ErrorTooltip