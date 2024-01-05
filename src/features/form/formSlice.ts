import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  formData: Record<string, any>;
  formSent: boolean;
}

const initialState: FormState = {
  formData: {},
  formSent: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (
      state,
      action: PayloadAction<{ id: string; value: any }>
    ) => {
      state.formData[action.payload.id] = action.payload.value;
    },
    resetForm: (state) => {
      state.formSent = false;
      state.formData = {};
    },
    submittedForm: (state) => {
      state.formSent = true;
    },
  },
});

export const { updateFormData, resetForm, submittedForm } = formSlice.actions;
export default formSlice.reducer;
