import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  menuState: boolean
}

export const menuState = createSlice({
	name: "menu",

	initialState:<InitialState> {
		menuState: false,
	},

	reducers: {
		toggleMenu: (state) => {
			state.menuState = !state.menuState;
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleMenu } = menuState.actions;

//Reducers
export default menuState.reducer;
