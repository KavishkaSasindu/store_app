import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "fetchData/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8000/user");
      return response.data;
    } catch (error) {
      return rejectWithValue.error;
    }
  }
);

const userDetailsSlice = createSlice({
  name: "user-details",
  initialState: {
    user: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.user = state.user.concat(action.payload);
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "something went wrong";
    });
  },
});

export default userDetailsSlice.reducer;

export const userSelect = (store) => store.user;
