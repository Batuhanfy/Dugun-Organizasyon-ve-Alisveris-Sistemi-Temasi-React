import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
    "data/fetchData",
    async () => {
        const response = await axios.get("/data.json");
        return response.data;
    }
);

const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: [],
        status: "idle",
        contact:[],
        bultenabone:[],
        error: null,
    },
    reducers: {
contact: (state,action)=>{
    let newcontact = [...state.contact];
    newcontact.push(action.payload);
    state.contact=newcontact;
    console.log(state.contact);
},
bulten: (state,action)=>{
  const yeniabone = action.payload;
  console.log("Yeni bülten abonesi: "+yeniabone);

  let bultenaboneleri= [...state.bultenabone];
  bultenaboneleri.push(yeniabone);

  state.bultenabone = bultenaboneleri;

 

  
}

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const {contact,bulten} = dataSlice.actions;
export default dataSlice.reducer;
