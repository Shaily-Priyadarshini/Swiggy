import { createSlice } from '@reduxjs/toolkit';

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurantList: [], // Your initial state
  },
  reducers: {
    setRestaurantList: (state, action) => {
      state.restaurantList = action.payload;
    },
    filterTopRatedRestaurants: (state) => {
      state.restaurantList = state.restaurantList.filter(
        (res) => res.info.avgRating > 4.5
      );
    },
  },
});

export const { setRestaurantList, filterTopRatedRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
