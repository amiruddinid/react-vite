import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMotorApi } from './ListApi';

export const fetchMotor = createAsyncThunk(
    'motor/fetchMotor',
    async() => {
        const res = await fetchMotorApi()
        return res.data;
    }
)

export const motorSlice = createSlice({
    name: 'motor',
    initialState: {
        data: [],
        loading: 'idle',
        message: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMotor.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(fetchMotor.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.data = action.payload
                // state.initData = action.payload
            })
            .addCase(fetchMotor.rejected, (state, action) => {
                state.loading = 'idle';
                state.message = action.payload.data
            })
    }
})

export const selectMotor = (state) => state.motor.data
export const selectMotorLoading = (state) => state.motor.loading
export default motorSlice.reducer