import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmissionData, fetchEmissionsByCoordinates } from './emissionsAPI';

interface EmissionsState {
  data: EmissionData[];
  loading: boolean;
  error: string | null;
  lastFetchedCoordinates: { lat: number; lng: number } | null;
  lastFetchedDate: string | null;
}

const initialState: EmissionsState = {
  data: [],
  loading: false,
  error: null,
  lastFetchedCoordinates: null,
  lastFetchedDate: null
};

export const emissionsSlice = createSlice({
  name: 'emissions',
  initialState,
  reducers: {
    resetEmissionsData: (state) => {
      state.data = [];
      state.error = null;
      state.loading = false;
      state.lastFetchedCoordinates = null;
      state.lastFetchedDate = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmissionsByCoordinates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchEmissionsByCoordinates.fulfilled,
        (state, action: PayloadAction<EmissionData[]>) => {
          state.data = action.payload.sort(
            (a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
          );
          if (action.payload.length > 0) {
            const firstItem = action.payload[0];
            state.lastFetchedCoordinates = {
              lat: firstItem.coordinates.latitude,
              lng: firstItem.coordinates.longitude
            };
            state.lastFetchedDate = firstItem.dateTime;
          }
          state.loading = false;
        }
      )
      .addCase(
        fetchEmissionsByCoordinates.rejected,
        (state, action) => {
          state.error = action.payload as string || 'Failed to fetch emissions data';
          state.loading = false;
        }
      );
  }
});

export const { resetEmissionsData } = emissionsSlice.actions;
export default emissionsSlice.reducer;