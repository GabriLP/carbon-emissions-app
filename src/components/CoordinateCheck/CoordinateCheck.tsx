import React, { ChangeEvent, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import { motion } from 'framer-motion';
import { debounce } from 'lodash';

interface CoordinateCheckPageProps {
  onCoordinateCheck: (latitude: number, longitude: number) => void;
  latitude: string;
  longitude: string;
}

const CoordinateCheckPage: React.FC<CoordinateCheckPageProps> = ({ onCoordinateCheck, latitude, longitude }) => {
  const [inputLatitude, setInputLatitude] = useState<string>(latitude);
  const [inputLongitude, setInputLongitude] = useState<string>(longitude);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const [latitudeError, setLatitudeError] = useState<string | null>(null);
  const [longitudeError, setLongitudeError] = useState<string | null>(null);

  const handleLatitudeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isValidCoordinate(value, 'latitude')) {
      setLatitudeError('Latitude must be between -90 and 90');
    } else {
      setLatitudeError(null);
    }
    debouncedSetInputLatitude(value);
  };
  
  const handleLongitudeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isValidCoordinate(value, 'longitude')) {
      setLongitudeError('Longitude must be between -180 and 180');
    } else {
      setLongitudeError(null);
    }
    debouncedSetInputLongitude(value);
  };

  const debouncedSetInputLatitude = debounce((newValue: string) => {
    setInputLatitude(newValue);
  }, 200);

  const debouncedSetInputLongitude = debounce((newValue: string) => {
    setInputLongitude(newValue);
  }, 200);

  useEffect(() => {
    setInputLatitude(latitude);
    setInputLongitude(longitude);
  }, [latitude, longitude]);

  const isValidCoordinate = (value: string, type: 'latitude' | 'longitude') => {
    const num = parseFloat(value);
    return !isNaN(num) && (type === 'latitude' ? num >= -90 && num <= 90 : num >= -180 && num <= 180);
  };

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    if (isValidCoordinate(inputLatitude, 'latitude') && isValidCoordinate(inputLongitude, 'longitude')) {
      onCoordinateCheck(parseFloat(inputLatitude), parseFloat(inputLongitude));
    }
  }, [inputLatitude, inputLongitude, onCoordinateCheck, isFirstLoad]);

  return (
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Typography variant="h5" gutterBottom>
          Check Emissions by Coordinates
        </Typography>
        <Typography variant="body1" gutterBottom>
          Enter latitude and longitude coordinates or click any point of the map to analyze emissions data for a specific location.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <Stack spacing={2} direction="row">
      <TextField
        id="latitude-input"
        label="Latitude"
        type="text"
        placeholder="Enter latitude"
        error={!!latitudeError}
        helperText={latitudeError}
        value={inputLatitude}
        onChange={handleLatitudeChange}
        variant="outlined"
        sx={{ maxWidth: 300}}
        fullWidth
      />
      <TextField
        id="longitude-input"
        label="Longitude"
        type="text"
        placeholder="Enter longitude"
        error={!!longitudeError}
        helperText={longitudeError}
        value={inputLongitude}
        onChange={handleLongitudeChange}
        variant="outlined"
        sx={{ maxWidth: 300}}
        fullWidth
      />
      </Stack>
    </Box>
      </Box>
  </motion.div>
  );
};

export default CoordinateCheckPage;