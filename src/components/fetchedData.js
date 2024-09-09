// async function fetchedData() {
//   let response = await fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
//   );
//   let da = await response.json();
//   console.log(da);
//   setCarouselData(da?.data?.cards[0]?.data?.data?.cards);

//   rest = da?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data);
//   setNoOfRestaurant(da?.data?.cards[2]?.data?.data?.totalRestaurants);

//   setAllRestaurant(rest);
//   setRestaurant(rest);
// }
// export default fetchedData;