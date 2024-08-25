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
        filteredblogs:[],
        error:null
    },
    reducers:{
        filtreleBlogs:(state,action)=>{
            const aramaTerimi = action.payload.toLowerCase(); 

            const bloglar = [...state.blogs];
        
            const filteredBlogs = bloglar.filter(blog => 
                blog.title.toLowerCase().includes(aramaTerimi)
            );
        
            state.filteredBlogs = filteredBlogs;
            console.log("filtrelendi");
        }
    },
    extraReducers: (builder) =>{
        builder 
        .addCase(fetchBlogs.pending, (state) =>{
            state.status="loading";
        })
        .addCase(fetchBlogs.fulfilled, (state,action)=>{
            state.status="ok";
            state.blogs= action.payload;
            state.filteredblogs= action.payload;
        })
        .addCase(fetchBlogs.rejected, (state,action)=>{
            state.status="failed";
            state.error=action.error.message;
        })
    }
});

export const {filtreleBlogs} = blogSlice.actions;
export default blogSlice.reducer;
