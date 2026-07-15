import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import type { NextPage } from 'next'
import PortalShell from '../components/PortalShell'

const CustomerLoginPage: NextPage = () => {
  return (
    <PortalShell title="Customer Registration / Login" subtitle="Secure email or OTP sign-in so customers can manage bookings and service requests without friction." active="Login">
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Sign in or register</Typography>
              <Stack spacing={2}>
                <TextField label="Email address" fullWidth />
                <TextField label="Phone number" fullWidth />
                <TextField label="OTP / verification code" fullWidth />
                <Button variant="contained" size="large">Send code</Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4, height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Why customers choose it</Typography>
              <Box component="ul" sx={{ pl: 2.5, color: 'text.secondary' }}>
                <li>Fast OTP or email sign-in</li>
                <li>Saved service history and preferences</li>
                <li>Instant booking updates and alerts</li>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PortalShell>
  )
}

export default CustomerLoginPage
