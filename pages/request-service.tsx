import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import type { NextPage } from 'next'
import PortalShell from '../components/PortalShell'

const RequestServicePage: NextPage = () => {
  return (
    <PortalShell
      title="Request Service"
      subtitle="Customers can submit plumbing requests, select urgency, and share service details instantly."
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Create a service request</Typography>
              <Stack spacing={2}>
                <TextField label="Full name" fullWidth />
                <TextField label="Address" fullWidth />
                <TextField select label="Service type" defaultValue="Leak repair" fullWidth>
                  <MenuItem value="Leak repair">Leak repair</MenuItem>
                  <MenuItem value="Drain cleaning">Drain cleaning</MenuItem>
                  <MenuItem value="Water heater">Water heater</MenuItem>
                </TextField>
                <TextField label="Issue details" multiline minRows={4} fullWidth />
                <TextField select label="Urgency" defaultValue="Today" fullWidth>
                  <MenuItem value="Today">Today</MenuItem>
                  <MenuItem value="This week">This week</MenuItem>
                  <MenuItem value="Flexible">Flexible</MenuItem>
                </TextField>
                <Button variant="contained" size="large">Submit request</Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>What happens next</Typography>
              <Box component="ul" sx={{ pl: 2.5, color: 'text.secondary' }}>
                <li>Nearby plumbers receive the request</li>
                <li>Customers receive quotes and timing</li>
                <li>Booking and tracking begin once accepted</li>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PortalShell>
  )
}

export default RequestServicePage
