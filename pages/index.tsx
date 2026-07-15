import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'
import PortalShell from '../components/PortalShell'

const highlights = [
  {
    title: 'Customer access',
    description: 'Fast registration and OTP sign-in for booking and support.',
    href: '/customer-login',
  },
  {
    title: 'Book a service',
    description: 'Submit requests, track urgency, and connect with verified plumbers.',
    href: '/request-service',
  },
  {
    title: 'Operator control',
    description: 'Dispatch work, review partner campaigns, and oversee admin operations.',
    href: '/service-manager-dashboard',
  },
]

const HomePage: NextPage = () => {
  return (
    <PortalShell
      title="A cleaner, modern portal for plumbing operations"
      subtitle="Bring customers, plumbers, partners, and internal teams into one polished experience that feels simple, trusted, and ready for growth."
      active="Home"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4, height: '100%' }}>
            <CardContent>
              <Typography variant="overline" color="primary" fontWeight={700}>Why it stands out</Typography>
              <Typography variant="h4" fontWeight={800} sx={{ mt: 1 }}>
                One platform for every role, every step of the journey.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5 }}>
                Customers can register, request service, and follow progress. Plumbers manage jobs and earnings. Partners launch campaigns. Managers and admins keep everything coordinated.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 2.5 }}>
                <Button component={Link} href="/customer-login" variant="contained" size="large">
                  Start as customer
                </Button>
                <Button component={Link} href="/find-plumbers" variant="outlined" size="large">
                  Browse plumbers
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4, height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5 }}>Portal highlights</Typography>
              <Stack spacing={1.5}>
                <Box sx={{ p: 1.5, bgcolor: '#f8fbff', borderRadius: 3 }}>
                  <Typography variant="subtitle2" fontWeight={700}>Verified workforces</Typography>
                  <Typography variant="body2" color="text.secondary">Trusted plumber profiles with skill matching and ratings.</Typography>
                </Box>
                <Box sx={{ p: 1.5, bgcolor: '#f8fbff', borderRadius: 3 }}>
                  <Typography variant="subtitle2" fontWeight={700}>Live operations</Typography>
                  <Typography variant="body2" color="text.secondary">Dispatching, tracking, and reporting from one dashboard.</Typography>
                </Box>
                <Box sx={{ p: 1.5, bgcolor: '#f8fbff', borderRadius: 3 }}>
                  <Typography variant="subtitle2" fontWeight={700}>Scalable growth</Typography>
                  <Typography variant="body2" color="text.secondary">Partner campaigns, subscriptions, and analytics all in one place.</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {highlights.map((item) => (
          <Grid item xs={12} md={4} key={item.title}>
            <Box component={Link} href={item.href} sx={{ textDecoration: 'none' }}>
              <Card sx={{ borderRadius: 4, height: '100%', '&:hover': { boxShadow: 6, cursor: 'pointer' } }}>
                <CardContent>
                  <Chip label="Ready" color="primary" size="small" sx={{ mb: 1.5 }} />
                  <Typography variant="h6" fontWeight={700}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 2 }}>
                    {item.description}
                  </Typography>
                  <Button variant="outlined">Open section</Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </PortalShell>
  )
}

export default HomePage
