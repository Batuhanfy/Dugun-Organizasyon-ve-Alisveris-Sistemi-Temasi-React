import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import alertify from 'alertifyjs';

export const fetchSepet = createAsyncThunk(
"sepet/fetchSepet",
async () =>{
 const response = await axios.get("/data.json");
 return response.data.sepet;
}
);


const sepetSlice = createSlice({
    name:"sepet",
    initialState:{
        sepettekiler:[],
        error:null,
        loading:"idle"
    },
    reducers:{
          sepetEkle: (state,action)=>{
       
            const product = action.payload;
            let sepet = [...state.sepettekiler];
            const addedItem = sepet.find((c)=>c.product.id === product.id) 
           
            if(addedItem){
                // ürün zaten ekli
                alertify.error("ürün ekli");
              

            }else {
                // ürünü ekle
                alertify.success(product.title + " favorilerinize eklendi!");
                console.log("istek geldiii");
            }

          }

    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchSepet.pending, (state)=>{
            state.loading="loading";
        })
        .addCase(fetchSepet.fulfilled, (state,action)=>{
            state.loading="ok";
            state.sepettekiler=action.payload;
        })
        .addCase(fetchSepet.rejected,(state,action)=>{
            state.error=action.error.message;
            state.loading="error";
        })

    }
});
export const {sepetEkle} = sepetSlice.actions;
export default sepetSlice.reducer;