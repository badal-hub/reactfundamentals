import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import cardData from "./utils/mockData";

export const Card = () => {
  const [filterData, setFilterData] = useState([]);
  const [listOfData, setListOfData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [background, setBackground] = useState("white");
  useEffect(() => {
    console.log("useEffect called");

    fetchData();
  }, []);
  const fetchData = async () => {
    console.log("fetchData called");

    try {
      const dataFromApi = await fetch(
        "https://corsproxy.io?https://www.swiggy.com/mapi/homepage/getCards?lat=23.361178&lng=85.357228"
      );
      console.log("dataFromApi ", dataFromApi);

      const jsonData = await dataFromApi.json();
      console.log("jsonData ", jsonData?.data.success);

      setListOfData(
        jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
      setFilterData(
        jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const onscrollHandler = () => {
    // setBackground("red");
    console.log("scollr called");
  };
  return filterData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className="flexItem"
      style={{ background: `${background}` }}
      onScroll={() => onscrollHandler()}
    >
      <div>
        <div>
          <input
            type="text"
            placeholder="search you restro name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const searchItems = listOfData.filter((element) =>
                element.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterData(searchItems);
            }}
          >
            search
          </button>
          <button
            className="btn"
            onClick={() => {
              const filterRestaurant = listOfData.filter(
                (element) => element.info.avgRating > 4
              );
              setFilterData(filterRestaurant);
            }}
          >
            Filter through rating 3+
          </button>
        </div>
      </div>
      <div className="flexCartItems">
        {filterData &&
          filterData.map((element) => {
            return (
              <Link
                to={`/menu/${element?.info?.id}`}
                key={element?.info?.id}
                className="card"
              >
                <div>
                  <div className="innerCard">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${element?.info?.cloudinaryImageId}`}
                      alt="imgoffood"
                      width={200}
                    />
                    <div>
                      <h3> {element?.info?.name}</h3>
                    </div>
                    <div>
                      <span> {element?.info?.deliveryTime}</span>
                      <span>
                        &nbsp; &nbsp; Rating {element?.info?.avgRating}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Card;
