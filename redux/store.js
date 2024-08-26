// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial state for the dropdowns
const initialState = {
  preferencesItems: [
    { label: 'Veg', value: 'veg' },
    { label: 'Non-Veg', value: 'non-veg' },
  ],
  userType: [
    { label: 'Admin', value: 'admin' },
    { label: 'Staff', value: 'staff' },
    { label: 'User', value: 'user' },
  ],
  foodStatus: [
    { label: 'Opt-in', value: 'opt-in' },
    { label: 'Opt-out', value: 'opt-out' },
  ],
  userData: {
      username: "",
      phonenumber: "",
      roomnumber: "",
      address: {
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          pincode: "",
          country: "India"
      },
      foodPreference: "",
      usertype: "",
      foodstatus: "",
      password: "",
  }
};

// Create a slice of the store for managing dropdown data
const dropdownSlice = createSlice({
  name: 'dropdowns',
  initialState,
  reducers: {
    setPreferencesItems: (state, action) => {
      state.userData.foodPreference = action.payload;
    },
    setUserType: (state, action) => {
      state.userData.usertype = action.payload;
    },
    setFoodStatus: (state, action) => {
      state.userData.usertype = action.payload;
    },
  },
});

// Export the actions
export const { setPreferencesItems, setUserType, setFoodStatus } = dropdownSlice.actions;

// Configure the store
const store = configureStore({
  reducer: {
    dropdowns: dropdownSlice.reducer,
  },
});

export default store;
