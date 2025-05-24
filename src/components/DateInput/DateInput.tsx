import React, { useState, useCallback } from 'react';
import { Box, TextField, FormControl } from '@mui/material';
import { motion } from 'framer-motion';

interface DateInputProps {
  onDatesChange: (dates: { startDate: string; endDate: string }) => void;
}

const DateInput: React.FC<DateInputProps> = ({ onDatesChange }) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleStartDateChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newStartDate = event.target.value; // Full datetime value
      setStartDate(newStartDate);
      if (endDate) {
        onDatesChange({ startDate: newStartDate, endDate });
      }
    },
    [setStartDate, endDate, onDatesChange]
  );

  const handleEndDateChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newEndDate = event.target.value; // Full datetime value
      setEndDate(newEndDate);
      if (startDate) {
        onDatesChange({ startDate, endDate: newEndDate });
      }
    },
    [setEndDate, startDate, onDatesChange]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row', alignItems: 'center', mt: 2 }}>
        {/* Start Date-Time Picker */}
        <FormControl variant="outlined" sx={{ flexGrow: 1, maxWidth: 300 }}>
          <TextField
            id="start-datetime"
            type="datetime-local" // Enables date and time input
            value={startDate}
            onChange={handleStartDateChange}
            label="Start Date & Time"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </FormControl>
        {/* End Date-Time Picker */}
        <FormControl variant="outlined" sx={{ flexGrow: 1, maxWidth: 300 }}>
          <TextField
            id="end-datetime"
            type="datetime-local" // Enables date and time input
            value={endDate}
            onChange={handleEndDateChange}
            label="End Date & Time"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </FormControl>
      </Box>
    </motion.div>
  );
};

export default DateInput;