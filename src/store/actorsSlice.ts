import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Actors {
  _id: number;
  name: string;
  mainImg: string;
  subImg1: string;
  subImg2: string;
  subImg3: string;
  career: string[];
  birthday: string;
  birthPlace: string;
  genre: string[];
  movies: string[];
}

interface ActorsState {
  actors: Actors[]
}

const initialState: ActorsState = {
  actors: []
}

export const postActors = createAsyncThunk(("postActors/actors"), async (newActors) => {
  const url = "https://api.elchocrud.pro/api/v1/c3bdae21bdb0e680d54230ba34d73713/actors"
  const res = await axios.post(url, newActors)
  return res.data;

})

export const getActors = createAsyncThunk(("getActors/actors"), async () => {
  const url = "https://api.elchocrud.pro/api/v1/c3bdae21bdb0e680d54230ba34d73713/actors"
  const res = await axios.get(url)
  return res.data;
})

export const actorsSlice = createSlice({
  name: "actors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActors.fulfilled, (state, action) => {
        state.actors = action.payload;
      })
  }
})
