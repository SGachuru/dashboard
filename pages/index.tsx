import {
  Typography,
  Box,
  Paper,
  Chip,
  Stack,
  Grid,
  Card,
  CardContent,
  Divider,
  Avatar,
} from '@mui/material'
import type { NextPage } from 'next'

interface Feature {
  id: string
  feature: string
  description: string
}

interface Section {
  id: string
  title: string
  badge: string
  accent: string
  features: Feature[]
}

const sections: Section[] = [
  {
    id: 'service-manager',
    title: 'Service Manager Portal',
    badge: 'Operations',
    accent: '#1976d2',
    features: [
      { id: 'M-001', feature: 'Multi-Plumber Account', description: 'Register company, add plumbers, and manage subscriptions centrally.' },
      { id: 'M-002', feature: 'Real-Time Map', description: 'Track active plumbers and current job locations instantly.' },
      { id: 'M-003', feature: 'Dispatch & Assign', description: 'Assign or auto-assign jobs with one click.' },
    ],
  },
  {
    id: 'partner-portal',
    title: 'Partner Portal',
    badge: 'Growth',
    accent: '#9c27b0',
    features: [
      { id: 'PR-001', feature: 'Partner Registration', description: 'Approve suppliers, trainers, and financiers quickly.' },
      { id: 'PR-002', feature: 'Ad Campaigns', description: 'Launch targeted listings, pricing, and promotions.' },
      { id: 'PR-003', feature: 'Lead Analytics', description: 'Review leads, impressions, clicks, and conversions.' },
    ],
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    badge: 'Control',
    accent: '#2e7d32',
    features: [
      { id: 'A-001', feature: 'User Management', description: 'Approve, suspend, or ban users across the platform.' },
      { id: 'A-002', feature: 'KYC Verification', description: 'Verify documents and business registration in one place.' },
      { id: 'A-003', feature: 'Analytics', description: 'Monitor bookings, revenue, retention, and platform health.' },
    ],
  },
]

const stats = [
  { label: 'Active Jobs', value: '248', detail: '+12% this week' },
  { label: 'Partner Campaigns', value: '36', detail: '8 pending review' },
  { label: 'Verified Accounts', value: '1.2k', detail: '92% approval rate' },
]

const quickLinks = ['Dispatch Board', 'Customer Insights', 'Billing Center', 'Compliance Review']

const DashboardPage: NextPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f7fb', color: '#0f172a' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '100vh' }}>
        <Box
          component="aside"
          sx={{
            width: { xs: '100%', md: 280 },
            bgcolor: '#0f172a',
            color: 'white',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            ServiceHub Portal
          </Typography>
          <Typography variant="body2" color="grey.400">
            Unified operations workspace for teams and partners
          </Typography>

          <Paper sx={{ bgcolor: 'rgba(255,255,255,0.08)', color: 'white', p: 2, borderRadius: 3 }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Avatar sx={{ bgcolor: '#1976d2', width: 40, height: 40 }}>AD</Avatar>
              <Box>
                <Typography variant="subtitle2">Admin Dashboard</Typography>
                <Typography variant="caption" color="grey.400">System Administrator</Typography>
              </Box>
            </Stack>
          </Paper>

          <Box sx={{ mt: 2 }}>
            {quickLinks.map((item) => (
              <Box
                key={item}
                sx={{
                  py: 1.2,
                  px: 1.2,
                  mb: 1,
                  borderRadius: 2,
                  bgcolor: 'rgba(255,255,255,0.04)',
                  cursor: 'pointer',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.12)' },
                }}
              >
                <Typography variant="body2">{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ flex: 1, p: { xs: 2, md: 4 } }}>
          <Paper sx={{ p: { xs: 2, md: 3 }, borderRadius: 4, mb: 3, boxShadow: '0 12px 35px rgba(15, 23, 42, 0.08)' }}>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={2}>
              <Box>
                <Typography variant="overline" color="primary" fontWeight={700}>
                  Web portal overview
                </Typography>
                <Typography variant="h4" fontWeight={700}>
                  Manage operations, partners, and governance in one place.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                  This portal brings together service dispatch, partner growth, and admin controls under a single experience.
                </Typography>
              </Box>
              <Chip label="Live Portal" color="primary" sx={{ alignSelf: 'flex-start', px: 1, py: 0.8 }} />
            </Stack>
          </Paper>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            {stats.map((stat) => (
              <Grid item xs={12} md={4} key={stat.label}>
                <Paper sx={{ p: 2.5, borderRadius: 3 }}>
                  <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
                  <Typography variant="h5" fontWeight={700} sx={{ mt: 0.5 }}>{stat.value}</Typography>
                  <Typography variant="caption" color="success.main">{stat.detail}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={3}>
            {sections.map((section) => (
              <Grid item xs={12} md={4} key={section.id}>
                <Card sx={{ height: '100%', borderRadius: 4, boxShadow: '0 10px 24px rgba(15, 23, 42, 0.06)' }}>
                  <CardContent>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                      <Typography variant="h6" fontWeight={700}>
                        {section.title}
                      </Typography>
                      <Chip label={section.badge} sx={{ bgcolor: `${section.accent}14`, color: section.accent, fontWeight: 700 }} />
                    </Stack>

                    <Divider sx={{ mb: 2 }} />

                    {section.features.map((feature) => (
                      <Box key={feature.id} sx={{ mb: 1.5 }}>
                        <Typography variant="subtitle2" fontWeight={700}>{feature.feature}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {feature.description}
                        </Typography>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardPage