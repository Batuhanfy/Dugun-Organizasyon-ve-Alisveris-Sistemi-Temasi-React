import {configureStore} from '@reduxjs/toolkit'

import dataSlice from './dataSlice'
import productSlide from './productsSlice'
import sepetSlice from './sepetSlice'
import blogSlice from './blogSlice'

export const store =configureStore({
    reducer: {
        data : dataSlice,
        product : productSlide,
        sepet : sepetSlice,
        blog : blogSlice
    },
})