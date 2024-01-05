import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  formData: Record<string, any>;
}

const initialState: FormState = {
  formData: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<{ id: string; value: any }>) => {
      state.formData[action.payload.id] = action.payload.value;
    },
    resetForm: (state) => {
      state.formData = {};
    },
  },
});

export const { updateFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
