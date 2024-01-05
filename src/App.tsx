import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Form from './features/form/Form';
import { styled } from '@mui/system';

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
            <Form />
          </Grid>
        </Grid>
      </StyledContainer>
    </StyledBox>
  );
}

export default App;
