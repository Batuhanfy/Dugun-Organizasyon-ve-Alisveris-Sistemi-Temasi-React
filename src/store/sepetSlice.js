import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import alertify from 'alertifyjs';
import Swal from 'sweetalert2';


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
        organizasyontalep:[],
        error:null,
        loading:"idle"
    },
    reducers:{
        
        setTalep: (state, action) => {
            state.organizasyontalep = action.payload;
            console.log("talep alındı");
            console.log(state.organizasyontalep);
          },
          sepetEkle: (state,action)=>{
       
            const product = action.payload;
            let sepet = [...state.sepettekiler];
            const addedItem = sepet.find((c)=>c.product.id === product.id) 
           
            if(addedItem){
                // ürün zaten ekli
                alertify.error("ürün ekli");
                Swal.fire({
                    title: 'Başarılı!',
                    text: 'Ürün sepetinize +1 Adet eklendi.',
                    icon: 'success',
                    confirmButtonText: 'Tamam'
                  });
            
                  addedItem.quantity+=1;

            }else {
                Swal.fire({
                    title: 'Başarılı!',
                    text: 'Ürün sepetinize eklendi.',
                    icon: 'success',
                    confirmButtonText: 'Tamam'
                  });
                  
               
                  sepet.push({'product':product,quantity:1} );
            }
        state.sepettekiler=sepet;
          },

          sepetSil: (state,action) =>{
            const product = action.payload;
            let sepet = [...state.sepettekiler];

           sepet = sepet.filter((c)=>c.product.id !== product.id);

           Swal.fire({
            title: 'Çıkartıldı',
            text: 'Ürün sepetinizden silindi.',
            icon: 'info',
            confirmButtonText: 'Anladım'
          });
          
            state.sepettekiler=sepet;
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
export const {sepetEkle,sepetSil,setTalep } = sepetSlice.actions;
export default sepetSlice.reducer;