import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData =createAsyncThunk(
"data/ferchData",
async => {
    const response = await axios.get("/data.json");
    return response.data;
}
    
)