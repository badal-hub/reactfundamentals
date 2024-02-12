const RestaurantCard = ({restCard}) => {
  return (
    <div>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restCard?.info?.cloudinaryImageId}`}
        alt="imgoffood"
        className="h-48 w-48 rounded-md "
      />
      <div>
        <h3> {restCard?.info?.name}</h3>
      </div>
      <div>
        <span> {restCard?.info?.deliveryTime}</span>
        <span>&nbsp; &nbsp; Rating {restCard?.info?.avgRating}</span>
      </div>
    </div>
  );
};
export default RestaurantCard;
//Higher order component
// a function that takes a component as argument and return a updated component.
 export const withPromotedLabel=(RestaurantCard)=>{
return (props)=>{
    return(
        <div>
            <label className="bg-white">Promoted</label>
            <RestaurantCard {...props}/>
        </div>
    )
}
}