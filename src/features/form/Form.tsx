import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import FormField from '../../components/FormField';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, submittedForm } from './formSlice';
import { RootState } from '../../app/store';
import fields from '../../assets/fields';

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state: RootState) => state.form);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleFieldChange = (id: string, value: any) => {
    dispatch(updateFormData({ id, value }));
  };

  const validateForm = () => {
    for (const field of fields.flat()) {
    if ('required' in field && field.required && !formData[field.id]) {
        return `Field '${field.placeholder}' is required.`;
      }
    }

    return null; // No errors
  };

  const handleSubmit = () => {
    setFormSubmitted(true);

    const formError = validateForm();
    if (formError) {
      setFormError(formError);
      return;
    }

    dispatch(submittedForm());
    setFormError(null);
    setFormSubmitted(false);
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
                showError={formSubmitted}
              />
            ))
          ) : (
            <FormField
              field={field}
              value={formData[field.id]}
              onFieldChange={(value: any) => handleFieldChange(field.id, value)}
              showError={formSubmitted}
            />
          )}
        </Grid>
      ))}
      {formError && (
        <Grid item xs={12}>
          <Typography variant='caption' color='error'>
            {formError}
          </Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        <Button variant='contained' color='primary' onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
