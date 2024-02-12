import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "./utils/cartSlice";
import { Img_url } from "./utils/mockData";
import UserContext from "./utils/UserContext";
const ItemList = ({ data }) => {
  const dispatch = useDispatch();
  console.log(data, "item dtata");

const handleItems=(item)=>{
dispatch(addItems(item))
}

  const contextData = useContext(UserContext);

  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="text-left border-b-2 m-2 p-2 flex justify-between"
          >
            <div className="w-9/12">
              <div className="text-xl py-2">{item?.card?.info?.name}</div>
              <div>Price {item?.card?.info?.price / 100}</div>
              <div>{item?.card?.info?.description}</div>
              <div>{contextData.name}</div>
            </div>
            <div className="w-3/12 relative">
              <img
                src={Img_url + item.card.info.imageId}
                alt="..."
                className="w-40 h-40 rounded-lg"
              />
              <button
                className="bg-black text-white w-20 p-2 absolute bottom-4 rounded-lg mx-auto"
                onClick={()=>handleItems(item)}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
