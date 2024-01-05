import React from 'react';
import { TextField, Select, MenuItem, FormControl, TextareaAutosize, Typography } from '@mui/material';

const FormField = ({ field, value, onFieldChange, showError }: { field: any, value: any, onFieldChange: any, showError: boolean }) => {
    
    const isRequired = field.required && !value;

    const fieldStyle = {
        marginBottom: '0.750rem',
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
                    <FormControl fullWidth variant="outlined" required={field.required} style={fieldStyle}>
                        <TextField
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
                     </FormControl>
                );
            case 'select':
                return (
                    <FormControl fullWidth variant="outlined" required={field.required}>
                        <Select value={value || ''} onChange={(e) => onFieldChange(e.target.value)} style={fieldStyle}>
                        {field.options.map((option: string | number, index: number) => (
                            <MenuItem key={index} value={option as string}>
                            {option}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                );
            case 'textarea':
                return (
                    <FormControl fullWidth variant="outlined" required={field.required}  style={fieldStyle}>
                        <TextareaAutosize
                            minRows={3}
                            maxRows={10}
                            placeholder={buildPlaceholder()}
                            style={{ width: '100%', resize: 'vertical' }}
                            value={value || ''}
                            onChange={(e) => onFieldChange(e.target.value)}
                        />
                    </FormControl>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <Typography variant="h6">{buildLabel()}</Typography>
            {renderInput()}
        </div>
    );
};

export default FormField;