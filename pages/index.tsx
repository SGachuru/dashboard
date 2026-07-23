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
import PortalShell from '../components/PortalShell'

const highlights = [
  {
    title: 'Customer access',
    description: 'Fast registration and OTP sign-in for booking and support.',
    href: '/customer-login',
    icon: '👤',
  },
  {
    title: 'Book a service',
    description: 'Submit requests, track urgency, and connect with verified pros.',
    href: '/request-service',
    icon: '📋',
  },
  {
    title: 'Operator control',
    description: 'Dispatch work, review campaigns, and oversee operations.',
    href: '/service-manager-dashboard',
    icon: '🧭',
  },
]

const HomePage: NextPage = () => {
  return (
    <PortalShell
      title="A cleaner, modern portal for plumbing operations"
      subtitle="Bring customers, plumbers, partners, and internal teams into one polished experience that feels simple, trusted, and ready for growth."
      active="Dashboard"
      stats={[
        { label: 'Jobs today', value: '18', trend: '+6%', trendUp: true, icon: '🔧' },
        { label: 'Revenue', value: '$9,841', trend: '+12%', trendUp: true, icon: '💰' },
        { label: 'Customers', value: '1,284', trend: '+3%', trendUp: true, icon: '👥' },
        { label: 'Open estimates', value: '31', trend: '-5%', trendUp: false, icon: '📋' },
      ]}
      chartData={[
        { label: 'Jobs', value: 45, color: '#f59e0b' },
        { label: 'Revenue', value: 35, color: '#3b82f6' },
        { label: 'Customers', value: 20, color: '#22c55e' },
      ]}
      tableRows={[
        { name: 'Leak repair', meta: 'A. Adams • North District', status: 'In Progress', amount: '$240' },
        { name: 'Water heater install', meta: 'T. Brooks • West Loop', status: 'Scheduled', amount: '$1,200' },
        { name: 'Drain cleaning', meta: 'J. Carter • Downtown', status: 'Completed', amount: '$180' },
        { name: 'Pipe replacement', meta: 'M. Davis • Eastside', status: 'Pending', amount: '$850' },
      ]}
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="overline" color="#f59e0b" fontWeight={700} sx={{ fontSize: '0.75rem', letterSpacing: '0.08em' }}>
                Why it stands out
              </Typography>
              <Typography variant="h4" fontWeight={800} color="#f8fafc" sx={{ mt: 1, letterSpacing: '-0.02em' }}>
                One platform for every role, every step of the journey.
              </Typography>
              <Typography variant="body1" color="#94a3b8" sx={{ mt: 1.5, lineHeight: 1.7 }}>
                Customers can register, request service, and follow progress. Plumbers manage jobs and earnings. Partners launch campaigns. Managers and admins keep everything coordinated.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 2.5 }}>
                <Box component="a" href="/customer-login" sx={{ textDecoration: 'none' }}>
                  <Button variant="contained" sx={{ bgcolor: '#f59e0b', color: '#fff', fontWeight: 700, px: 3, '&:hover': { bgcolor: '#d97706' } }}>
                    Start as customer
                  </Button>
                </Box>
                <Box component="a" href="/find-plumbers" sx={{ textDecoration: 'none' }}>
                  <Button variant="outlined" sx={{ color: '#f8fafc', borderColor: '#334155', fontWeight: 700, px: 3, '&:hover': { borderColor: '#64748b' } }}>
                    Browse plumbers
                  </Button>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                Portal highlights
              </Typography>
              <Stack spacing={1.5}>
                {highlights.map((item) => (
                  <Box
                    key={item.title}
                    component="a"
                    href={item.href}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: '#0f172a',
                      border: '1px solid #334155',
                      textDecoration: 'none',
                      transition: 'all 0.15s ease',
                      '&:hover': { borderColor: '#f59e0b', bgcolor: '#1e293b' },
                    }}
                  >
                    <Box sx={{ fontSize: '1.25rem', lineHeight: 1 }}>{item.icon}</Box>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700} color="#f8fafc" sx={{ mb: 0.25 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="#94a3b8" sx={{ lineHeight: 1.5 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            {highlights.map((item) => (
              <Card
                key={item.title}
                sx={{
                  flex: 1,
                  borderRadius: 3,
                  bgcolor: '#1e293b',
                  border: '1px solid #334155',
                  boxShadow: 'none',
                  transition: 'all 0.15s ease',
                  '&:hover': { borderColor: '#f59e0b' },
                }}
              >
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1.5 }}>
                    <Box sx={{ fontSize: '1.5rem' }}>{item.icon}</Box>
                    <Chip label="Ready" size="small" sx={{ bgcolor: '#f59e0b18', color: '#f59e0b', fontWeight: 700, height: 24 }} />
                  </Stack>
                  <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 0.75 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="#94a3b8" sx={{ mb: 2, lineHeight: 1.5 }}>
                    {item.description}
                  </Typography>
                  <Button variant="text" sx={{ color: '#f59e0b', fontWeight: 700, px: 0, textTransform: 'none' }}>
                    Open section →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </PortalShell>
  )
}

export default HomePage
