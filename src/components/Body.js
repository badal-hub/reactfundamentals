import Card from "./Card";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  const  onlineStatus = useOnlineStatus();
  console.log("onlinestatus",onlineStatus)
  return onlineStatus === false ? (
    <h1>your internet is not working! Please check</h1>
  ) : (
    <div className="body">
      <Card />
    </div>
  );
};

export default Body;
