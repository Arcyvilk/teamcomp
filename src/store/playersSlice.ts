import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '.';

interface PlayersState {
  allies: any[];
  enemies: any[];
}

const initialState: PlayersState = {
  allies: [],
  enemies: [],
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    savePlayersReducer: (
      state,
      action: PayloadAction<{ allies: any[]; enemies: any[] }>,
    ) => {
      state.allies = action.payload.allies;
      state.enemies = action.payload.enemies;
    },
  },
});

export const { savePlayersReducer } = playersSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const savePlayers = (players: PlayersState): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(savePlayersReducer(players));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getAllies = (state: RootState): any[] => state.players.allies;
export const getEnemies = (state: RootState): any[] => state.players.enemies;

export default playersSlice.reducer;
