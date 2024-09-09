import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurantList, filterTopRatedRestaurants } from './restaurantSlice';
import ResturantCard from './ResturantCard';

const Body = () => {
  const dispatch = useDispatch();
  const restaurantList = useSelector((state) => state.restaurant.restaurantList);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const res = await data.json();
    const fetchedRestaurantList =
      res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    dispatch(setRestaurantList(fetchedRestaurantList));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="search">
        <input></input>
        <button>Search</button>
        <button onClick={() => dispatch(filterTopRatedRestaurants())}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant">
        {restaurantList.map((rest) => (
          <ResturantCard resData={rest} key={rest.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
