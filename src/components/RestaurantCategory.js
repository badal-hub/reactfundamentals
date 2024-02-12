
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setActiveIndex }) => {
  const [secondCondition,setSecondCondition]=useState(false);
console.log(setActiveIndex,"seActiveIndex")
  const handleClick = () => {
    setActiveIndex();
   setSecondCondition(!secondCondition)
  };
  return (
    <div className=" w-6/12 mx-auto my-4 p-4 bg-gray-300">
      {/* //header */}
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-xl">
          {data.title}({data.itemCards.length})
        </span>
        <span className="font-bold">v</span>
      </div>
      {/* body */}
      {(showItems && secondCondition ) ? <ItemList data={data.itemCards} />: null}
    </div>
  );
};
export default RestaurantCategory;
