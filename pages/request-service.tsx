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
          <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} color="#f0f6fc" sx={{ mb: 2 }}>Create a service request</Typography>
              <Stack spacing={2}>
                <TextField label="Full name" fullWidth sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#0d1117', color: '#f0f6fc', borderColor: '#30363d' } }} />
                <TextField label="Address" fullWidth sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#0d1117', color: '#f0f6fc', borderColor: '#30363d' } }} />
                <TextField select label="Service type" defaultValue="Leak repair" fullWidth sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#0d1117', color: '#f0f6fc', borderColor: '#30363d' } }}>
                  <MenuItem value="Leak repair" sx={{ bgcolor: '#161b22', color: '#f0f6fc' }}>Leak repair</MenuItem>
                  <MenuItem value="Drain cleaning" sx={{ bgcolor: '#161b22', color: '#f0f6fc' }}>Drain cleaning</MenuItem>
                  <MenuItem value="Water heater" sx={{ bgcolor: '#161b22', color: '#f0f6fc' }}>Water heater</MenuItem>
                </TextField>
                <TextField label="Issue details" multiline minRows={4} fullWidth sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#0d1117', color: '#f0f6fc', borderColor: '#30363d' } }} />
                <TextField select label="Urgency" defaultValue="Today" fullWidth sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#0d1117', color: '#f0f6fc', borderColor: '#30363d' } }}>
                  <MenuItem value="Today" sx={{ bgcolor: '#161b22', color: '#f0f6fc' }}>Today</MenuItem>
                  <MenuItem value="This week" sx={{ bgcolor: '#161b22', color: '#f0f6fc' }}>This week</MenuItem>
                  <MenuItem value="Flexible" sx={{ bgcolor: '#161b22', color: '#f0f6fc' }}>Flexible</MenuItem>
                </TextField>
                <Button variant="contained" size="large" sx={{ bgcolor: '#238636', '&:hover': { bgcolor: '#2ea043' } }}>Submit request</Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} color="#f0f6fc" sx={{ mb: 2 }}>What happens next</Typography>
              <Box component="ul" sx={{ pl: 2.5, color: '#8b949e' }}>
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
