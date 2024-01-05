import React from 'react';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { resetForm, submittedForm } from '../form/formSlice';
import { RootState } from '../../app/store';

const ThankYouPage: React.FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form.formData);

  const handleBack = () => {
    // Reset form and navigate back
    dispatch(resetForm());
  };

  return (
    <div>
      <Typography variant="h4">Thank You!</Typography>
      <Typography variant="body1">
        Name: {formData.firstName} {formData.lastName}
      </Typography>
      <Typography variant="body1">Email: {formData.Email}</Typography>
      <Button variant="contained" color="primary" onClick={handleBack}>
        Back
      </Button>
    </div>
  );
};

export default ThankYouPage;
