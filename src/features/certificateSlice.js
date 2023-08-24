import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '',
  name: '',
  imageUrl: '',
  usdtPrice: 0,
  carbonAmount: 0,
  createdAt: '',
  createdBy: ''
}

const certificateSlice = createSlice({
  name: 'certificate',
  initialState,
  reducers: {
    setCertificate: (state, action) => {
      const { id, name, imageUrl, usdtPrice, carbonAmount, createdAt, createdBy } = action.payload;
      state.id = id;
      state.name = name;
      state.imageUrl = imageUrl;
      state.usdtPrice = usdtPrice;
      state.carbonAmount = carbonAmount;
      state.createdAt = createdAt;
      state.createdBy = createdBy;
    },
    clearCertificate: (state) => {
      state.id = '';
      state.name = '';
      state.imageUrl = '';
      state.usdtPrice = 0;
      state.carbonAmount = 0;
      state.createdAt = '';
      state.createdBy = '';
    }
  }
})

export const { setCertificate, clearCertificate } = certificateSlice.actions;
export default certificateSlice.reducer;
