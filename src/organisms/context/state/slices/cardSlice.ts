import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  cardState: boolean
}

export const cardState = createSlice({
	name: "card",

	initialState:<InitialState> {
		cardState: false,
	},

	reducers: {
		toggleCard: (state) => {
			state.cardState = !state.cardState;
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleCard } = cardState.actions;

//Reducers
export default cardState.reducer;
