import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
	themeState: boolean
}

export const themeState = createSlice({
	name: "theme",

	initialState: <InitialState> {
		themeState: false,
	},

	reducers: {
		toggleTheme: (state) => {
			state.themeState = !state.themeState;
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeState.actions;

//Reducers
export default themeState.reducer;
