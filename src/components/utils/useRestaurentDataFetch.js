import { useEffect, useState } from "react";

const useRestaurentDataFetch = (id) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{

        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.361178&lng=85.357228&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        );
        const responseJson = await data.json();
        setMenuData(responseJson);
    }
    catch(error){
        console.log("error",error)
    }
  };
  return menuData;
};

export default useRestaurentDataFetch;
