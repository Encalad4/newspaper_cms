import React from 'react';
import MuiSwitch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import styles from './Switch.module.css';

const StyledSwitch = styled(MuiSwitch)({
  '& .MuiSwitch-switchBase': {
    color: '#ffff',
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#8E8E8E',
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 0 0 1px #E5E5E5', // Gray circle around the ball
  },
  '& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
    boxShadow: '0 0 0 2px #6DF491', // Green circle when on
  },
});

const Switch = ({ isOn, handleToggle, onColor = '#6DF491' }) => {
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