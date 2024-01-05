import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid } from '@mui/material';
import { updateFormData, resetForm } from './formSlice';
import FormField from '../../components/FormField';
import { RootState } from '../../app/store';
import fields from '../../assets/fields';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form.formData);

  const handleFieldChange = (id: string, value: any) => {
    dispatch(updateFormData({ id, value }));
  };

  const handleSubmit = () => {
    dispatch(resetForm());
  };

  return (
    <Grid container spacing={2}>
      {fields.map((field: any, index: number) => (
        <Grid item xs={12} key={index}>
          {Array.isArray(field) ? (
            field.map((nestedField: any, nestedIndex: number) => (
              <FormField
                key={nestedIndex}
                field={nestedField}
                value={formData[nestedField.id]}
                onFieldChange={(value: any) => handleFieldChange(nestedField.id, value)}
              />
            ))
          ) : (
            <FormField
              field={field}
              value={formData[field.id]}
              onFieldChange={(value: any) => handleFieldChange(field.id, value)}
            />
          )}
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
