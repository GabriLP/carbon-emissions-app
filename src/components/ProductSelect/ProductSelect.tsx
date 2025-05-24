import React from 'react';
import { motion } from 'framer-motion';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface Parameter {
  id: number;
  name: string;
  displayName: string | null;
  description: string | null;
}
interface ProductSelectProps {
  value: string | number;
  onChange: (value: string | number) => void;
}
const ProductSelect: React.FC<ProductSelectProps> = React.memo(({ value, onChange }) => {
  // Recommended Parameters List
  const parameters = [
    { id: 1, value: 'pm10', label: 'PM10 (Particulate Matter < 10 µm)' },
    { id: 2, value: 'pm25', label: 'PM2.5 (Particulate Matter < 2.5 µm)' },
    { id: 10, value: 'o3', label: 'Ozone (O₃)' },
    { id: 8, value: 'co', label: 'Carbon Monoxide (CO)' },
    { id: 7, value: 'no2', label: 'Nitrogen Dioxide (NO₂)' },
    { id: 9, value: 'so2', label: 'Sulfur Dioxide (SO₂)' },
    { id: 21, value: 'co2', label: 'Carbon Dioxide (CO₂)' },
    { id: 27, value: 'nox', label: 'Nitrogen Oxides (NOx)' },
    { id: 11, value: 'bc', label: 'Black Carbon (BC)' },
    { id: 33, value: 'ufp', label: 'Ultrafine Particles (UFP count)' },
  ];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      }}
      initial="hidden"
      animate="visible"
    >
      <FormControl sx={{ my: 2, minWidth: 200 }}>
        <InputLabel id="product-select-label">Choose a parameter</InputLabel>
        <Select
          labelId="product-select-label"
          id="product-select"
          value={value}
          label="Choose a parameter"
          aria-labelledby="product-select-label"
          onChange={(e) => onChange(e.target.value)}
        >
          {parameters.map((param) => (
            <MenuItem key={param.value} value={param.value}>
              {param.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </motion.div>
  );
});

export default ProductSelect;