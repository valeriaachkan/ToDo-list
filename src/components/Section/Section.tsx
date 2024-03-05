import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { Sheet, Typography } from '@mui/joy';
import React from 'react';

type SectionProps = {
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <CssVarsProvider>
      <CssBaseline />

      <Sheet
        sx={{
          mx: 'auto',
          mt: '50px',
          mb: '50px',
          py: '25px',
          px: '25px',
          maxWidth: '800px',
          minHeight: '600px',
          borderRadius: 'xl',
          boxShadow: 'md',
        }}
        variant="plain"
      >
        <Typography level="h3" sx={{ mb: '15px' }}>
          My ToDo List
        </Typography>
        {children}
      </Sheet>
    </CssVarsProvider>
  );
};

export default Section;
