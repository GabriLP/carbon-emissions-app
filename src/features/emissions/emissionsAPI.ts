import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface EmissionData {
  parameter: string;
  value: number;
  unit: string;
  location: string;
  coordinates: { latitude: number; longitude: number };
  dateTime: string;
  healthRecommendations?: string | null;
}

interface FetchEmissionsParams {
  lat: number;
  lng: number;
  date: string;
  parameter: string;
}

// Validate environment variables
const emissionsApiUrl = process.env.NEXT_PUBLIC_EMISSIONS_API_URL;
const emissionsApiKey = process.env.NEXT_PUBLIC_EMISSIONS_API_KEY;

if (!emissionsApiUrl || !emissionsApiKey) {
  throw new Error('Missing required environment variables: NEXT_PUBLIC_EMISSIONS_API_URL or NEXT_PUBLIC_EMISSIONS_API_KEY');
}

const isDateWithinRange = (dateStr: string): boolean => {
  const inputDate = new Date(dateStr);
  const today = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);
  return inputDate >= thirtyDaysAgo && inputDate <= today;
};

export const fetchEmissionsByCoordinates = createAsyncThunk<
  EmissionData[],
  FetchEmissionsParams,
  { rejectValue: string }
>(
  'emissions/fetchByCoordinates',
  async ({ lat, lng, date, parameter }, thunkAPI) => {
    try {
      if (!lat || !lng || !date || !parameter) {
        return thunkAPI.rejectWithValue('All parameters are required: latitude, longitude, date, and air quality parameter');
      }

      if (!isDateWithinRange(date)) {
        return thunkAPI.rejectWithValue('Please select a date within the last 30 days');
      }

      const requestBody = {
        location: {
          latitude: lat,
          longitude: lng
        },
        dateTime: new Date(date).toISOString(),
        extraComputations: ['HEALTH_RECOMMENDATIONS'],
        pageSize: 100,
        universalAqi: true,
        languageCode: 'en'
      };

      const response = await axios.post(emissionsApiUrl, requestBody, {
        params: { key: emissionsApiKey },
        headers: { 'Content-Type': 'application/json' }
      });

      console.log('API Response:', response.data);

      if (!response.data?.results?.length) {
        return thunkAPI.rejectWithValue('No data available for the selected criteria');
      }

      const results = response.data.results;
      
      // Map the results to match your EmissionData interface
      const mappedResults: EmissionData[] = results.map((result: any) => ({
        parameter: result.parameter,
        value: parseFloat(result.value),
        unit: result.unit,
        location: result.location || `${lat.toFixed(3)}, ${lng.toFixed(3)}`,
        coordinates: {
          latitude: lat,
          longitude: lng
        },
        dateTime: result.dateTime,
        healthRecommendations: result.healthRecommendations || null
      }));

      return mappedResults;

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.error?.message || error.message;
        return thunkAPI.rejectWithValue(message);
      }
      return thunkAPI.rejectWithValue('Failed to fetch air quality data');
    }
  }
);