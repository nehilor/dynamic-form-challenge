import React from 'react';
import { TextField, Select, MenuItem, FormControl, TextareaAutosize, Typography } from '@mui/material';

const FormField = ({ field, value, onFieldChange, showError }: { field: any, value: any, onFieldChange: any, showError: boolean }) => {
    
    const isRequired = field.required && !value;

    const fieldStyle = {
        marginTop: '0.750rem',
    };

    const buildLabel = () => {
        if (field.placeholder) {
            return field.placeholder;
        } else if (field.id) {
            return field.id.charAt(0).toUpperCase() + field.id.slice(1);
        }
        return '';
    }

    const buildPlaceholder = () => {
        if (field.placeholder) {
            return field.placeholder;
        } else if (field.id) {
            return field.id.charAt(0).toUpperCase() + field.id.slice(1);
        }
        return '';
    }

    const renderInput = () => {
        switch (field.type) {
            case 'text':
                return (
                    <TextField
                        id={field.id}
                        fullWidth
                        label={buildPlaceholder()}
                        variant="outlined"
                        required={field.required}
                        value={value || ''}
                        onChange={(e) => onFieldChange(e.target.value)}
                        placeholder={buildPlaceholder()}
                        type={field.type}
                        error={showError && isRequired}
                    />
                );
            case 'select':
                return (
                    <Select value={value || ''} id={field.id} onChange={(e) => onFieldChange(e.target.value)} style={fieldStyle}>
                    {field.options.map((option: string | number, index: number) => (
                        <MenuItem key={index} value={option as string}>
                        {option}
                        </MenuItem>
                    ))}
                    </Select>
                );
            case 'textarea':
                return (
                    <TextareaAutosize
                        id={field.id}
                        minRows={3}
                        maxRows={10}
                        placeholder={buildPlaceholder()}
                        style={{ width: '100%', resize: 'vertical' }}
                        value={value || ''}
                        onChange={(e) => onFieldChange(e.target.value)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <FormControl fullWidth variant="outlined" required={field.required} style={fieldStyle}>
            <Typography variant="h6">{buildLabel()}</Typography>
            {renderInput()}
        </FormControl>
    );
};

export default FormField;