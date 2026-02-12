import React from 'react';
import MuiSwitch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import styles from './Switch.module.css';

const StyledSwitch = styled(MuiSwitch)({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#4CAF50',
    '&:hover': {
      backgroundColor: 'rgba(76, 175, 80, 0.08)',
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#4CAF50',
  },
  '& .MuiSwitch-switchBase': {
    color: '#ccc',
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#ccc',
  },
});

const Switch = ({ isOn, handleToggle, onColor = '#4CAF50' }) => {
  return (
    <div className={styles.switchContainer}>
      <StyledSwitch
        checked={isOn}
        onChange={handleToggle}
        inputProps={{ 'aria-label': 'toggle switch' }}
        sx={{
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: onColor,
          },
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: onColor,
          },
        }}
      />
    </div>
  );
};

export default Switch;