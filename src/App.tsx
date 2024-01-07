import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Form from './features/form/Form';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import ThankYouPage from './features/thankyou/ThankYouPage';

const StyledBox = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledContainer = styled(Container)({
  padding: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
});


function App() {

  const { formSent } = useSelector((state: RootState) => state.form);

  return (
    <StyledBox>
      <CssBaseline />
      <StyledContainer maxWidth="sm">
        <Grid container spacing={3} direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h5" align="center">
              Welcome to Dynamic Form App
            </Typography>
          </Grid>
          <Grid item>
          {formSent ? <ThankYouPage /> : <Form />}
          </Grid>
        </Grid>
      </StyledContainer>
    </StyledBox>
  );
}

export default App;
