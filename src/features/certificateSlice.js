import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '',
  name: '',
  origin: '',
  address: '',
  start_date: '',
  end_date: '',
  amount: 0,
  price: 0,
  image: '',
  description: '',
  createdAt: '',
}

const certificateSlice = createSlice({
  name: 'certificate',
  initialState,
  reducers: {
    setCertificate: (state, action) => {
      const {
        id,
        name,
        wallet,
        origin,
        address,
        start_date,
        end_date,
        amount,
        price,
        image,
        description,
        createdAt,
      } = action.payload;
      state.id = id;
      state.name = name;
      state.walletCompany = wallet;
      state.origin = origin;
      state.address = address;
      state.startDate = start_date;
      state.endDate = end_date;
      state.amount = amount;
      state.price = price;
      state.image = image;
      state.description = description;
      state.createdAt = createdAt;
    },
    clearCertificate: (state) => {
      state.id = '';
      state.name = '';
      state.origin = '';
      state.address = '';
      state.startDdate = '';
      state.endDate = '';
      state.amount = 0;
      state.price = 0;
      state.image = '';
      state.description = '';
      state.createdAt = '';
    }
  }
})

export const { setCertificate, clearCertificate } = certificateSlice.actions;
export default certificateSlice.reducer;

