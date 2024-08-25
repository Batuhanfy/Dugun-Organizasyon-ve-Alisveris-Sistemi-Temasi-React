import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk(
    "blogs/fetchBlogs",

    async () =>{
        const response = await axios.get("/data.json");
        return response.data.blogs;
    }
);


const blogSlice = createSlice({
    name:"blog",
    initialState:{
        status:"idle",
        blogs:[],
        error:null
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder 
        .addCase(fetchBlogs.pending, (state) =>{
            state.status="loading";
        })
        .addCase(fetchBlogs.fulfilled, (state,action)=>{
            state.status="ok";
            state.blogs= action.payload;
        })
        .addCase(fetchBlogs.rejected, (state,action)=>{
            state.status="failed";
            state.error=action.error.message;
        })
    }
});

export default blogSlice.reducer;
