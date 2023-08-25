import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '',
  name: '',
  imageUrl: '',
  usdtPrice: 0,
  carbonAmount: 0,
  progress: 0,
  createdAt: '',
  origin: '',
  avatar: '',
  address: '',
  startDate: '',
  endDate: '',
  description: '',
}

const certificateSlice = createSlice({
  name: 'certificate',
  initialState,
  reducers: {
    setCertificate: (state, action) => {
      const {
        id,
        name,
        imageUrl,
        usdtPrice,
        carbonAmount,
        progress,
        createdAt,
        origin,
        avatar,
        address,
        startDate,
        endDate,
        description,
      } = action.payload;
      state.id = id;
      state.name = name;
      state.imageUrl = imageUrl;
      state.usdtPrice = usdtPrice;
      state.carbonAmount = carbonAmount;
      state.progress = progress;
      state.createdAt = createdAt;
      state.origin = origin;
      state.avatar = avatar;
      state.address = address;
      state.startDate = startDate;
      state.endDate = endDate;
      state.description = description;
    },
    clearCertificate: (state) => {
      state.id = '';
      state.name = '';
      state.imageUrl = '';
      state.usdtPrice = 0;
      state.carbonAmount = 0;
      state.progress = 0;
      state.createdAt = '';
      state.origin = '';
      state.avatar = '';
      state.address = '';
      state.startDate = '';
      state.endDate = '';
      state.description = '';
    }
  }
})

export const { setCertificate, clearCertificate } = certificateSlice.actions;
export default certificateSlice.reducer;

