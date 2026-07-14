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
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  LinearProgress,
  Button,
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

const navigation = ['Overview', 'Dispatch Center', 'Partner Programs', 'Compliance', 'Billing', 'Reports']

const sections: Section[] = [
  {
    id: 'service-manager',
    title: 'Service Manager Portal',
    badge: 'Operations',
    accent: '#1976d2',
    features: [
      { id: 'M-001', feature: 'Multi-Plumber Account', description: 'Register companies, manage teams, and control subscriptions from one place.' },
      { id: 'M-002', feature: 'Real-Time Map', description: 'Monitor technician activity and job locations in live time.' },
      { id: 'M-003', feature: 'Dispatch & Assign', description: 'Route work quickly with smart assignment rules and escalations.' },
    ],
  },
  {
    id: 'partner-portal',
    title: 'Partner Portal',
    badge: 'Growth',
    accent: '#9c27b0',
    features: [
      { id: 'PR-001', feature: 'Partner Registration', description: 'Onboard suppliers, trainers, and financiers with approval workflows.' },
      { id: 'PR-002', feature: 'Ad Campaigns', description: 'Launch targeted promotions with pricing and placement controls.' },
      { id: 'PR-003', feature: 'Lead Analytics', description: 'Track engagement, conversions, and campaign performance by segment.' },
    ],
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    badge: 'Control',
    accent: '#2e7d32',
    features: [
      { id: 'A-001', feature: 'User Management', description: 'Approve, suspend, or review users across all business roles.' },
      { id: 'A-002', feature: 'KYC Verification', description: 'Validate documents and business credentials with structured review.' },
      { id: 'A-003', feature: 'Analytics', description: 'Monitor bookings, revenue, retention, churn, and platform health.' },
    ],
  },
]

const kpis = [
  { label: 'Open Requests', value: '248', detail: '+12% vs last week' },
  { label: 'Active Partners', value: '36', detail: '8 pending review' },
  { label: 'Verified Accounts', value: '1.2k', detail: '92% approval rate' },
  { label: 'SLA Health', value: '94%', detail: 'Above target' },
]

const workflowTasks = [
  { title: 'Dispatch 14 priority jobs', owner: 'Operations team', status: 'In progress' },
  { title: 'Review new partner approvals', owner: 'Compliance', status: 'Pending' },
  { title: 'Finalize billing batch', owner: 'Finance', status: 'Scheduled' },
]

const healthItems = [
  { label: 'System uptime', value: 99.8, color: '#1976d2' },
  { label: 'Response time', value: 86, color: '#2e7d32' },
  { label: 'Case resolution', value: 91, color: '#f57c00' },
]

const DashboardPage: NextPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f3f6fb', color: '#0f172a' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '100vh' }}>
        <Box
          component="aside"
          sx={{
            width: { xs: '100%', md: 280 },
            bgcolor: '#081224',
            color: 'white',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Enterprise Portal
          </Typography>
          <Typography variant="body2" color="grey.400">
            Connected operations for service delivery, partner growth, and governance.
          </Typography>

          <Paper sx={{ bgcolor: 'rgba(255,255,255,0.08)', color: 'white', p: 2, borderRadius: 3 }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Avatar sx={{ bgcolor: '#1976d2', width: 42, height: 42 }}>AD</Avatar>
              <Box>
                <Typography variant="subtitle2">Alicia Daniels</Typography>
                <Typography variant="caption" color="grey.400">Operations Director</Typography>
              </Box>
            </Stack>
          </Paper>

          <Box sx={{ mt: 1 }}>
            {navigation.map((item, index) => (
              <Box
                key={item}
                sx={{
                  py: 1.1,
                  px: 1.2,
                  mb: 1,
                  borderRadius: 2,
                  bgcolor: index === 0 ? 'rgba(25,118,210,0.18)' : 'rgba(255,255,255,0.04)',
                  cursor: 'pointer',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.12)' },
                }}
              >
                <Typography variant="body2" fontWeight={index === 0 ? 700 : 400}>{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ flex: 1, p: { xs: 2, md: 4 } }}>
          <Paper sx={{ p: { xs: 2, md: 3 }, borderRadius: 4, mb: 3, boxShadow: '0 12px 35px rgba(15, 23, 42, 0.08)' }}>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={2}>
              <Box>
                <Typography variant="overline" color="primary" fontWeight={700}>
                  Enterprise command center
                </Typography>
                <Typography variant="h4" fontWeight={700}>
                  Run service, partner, and admin workflows from one reliable operating layer.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                  The platform is designed to keep daily operations, approvals, and customer-facing actions flowing smoothly across departments.
                </Typography>
              </Box>
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" color="primary">Export Report</Button>
                <Button variant="contained" color="primary">Create Task</Button>
              </Stack>
            </Stack>
          </Paper>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            {kpis.map((stat) => (
              <Grid item xs={12} sm={6} md={3} key={stat.label}>
                <Paper sx={{ p: 2.2, borderRadius: 3, height: '100%' }}>
                  <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
                  <Typography variant="h5" fontWeight={700} sx={{ mt: 0.5 }}>{stat.value}</Typography>
                  <Typography variant="caption" color="success.main">{stat.detail}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Card sx={{ borderRadius: 4, mb: 3, boxShadow: '0 10px 24px rgba(15, 23, 42, 0.06)' }}>
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <Typography variant="h6" fontWeight={700}>Today’s workflow queue</Typography>
                    <Chip label="Priority" color="primary" size="small" />
                  </Stack>
                  <List dense>
                    {workflowTasks.map((task) => (
                      <ListItem key={task.title} sx={{ px: 0 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: '#e3f2fd', color: '#1976d2', width: 34, height: 34 }}>•</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={task.title}
                          secondary={`${task.owner} • ${task.status}`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>

              <Grid container spacing={2}>
                {sections.map((section) => (
                  <Grid item xs={12} md={4} key={section.id}>
                    <Card sx={{ height: '100%', borderRadius: 4, boxShadow: '0 10px 24px rgba(15, 23, 42, 0.06)' }}>
                      <CardContent>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                          <Typography variant="subtitle1" fontWeight={700}>{section.title}</Typography>
                          <Chip label={section.badge} sx={{ bgcolor: `${section.accent}14`, color: section.accent, fontWeight: 700 }} />
                        </Stack>
                        <Divider sx={{ mb: 2 }} />
                        {section.features.map((feature) => (
                          <Box key={feature.id} sx={{ mb: 1.5 }}>
                            <Typography variant="subtitle2" fontWeight={700}>{feature.feature}</Typography>
                            <Typography variant="body2" color="text.secondary">{feature.description}</Typography>
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Card sx={{ borderRadius: 4, boxShadow: '0 10px 24px rgba(15, 23, 42, 0.06)' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Platform health</Typography>
                  {healthItems.map((item) => (
                    <Box key={item.label} sx={{ mb: 2 }}>
                      <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
                        <Typography variant="body2">{item.label}</Typography>
                        <Typography variant="body2" fontWeight={700}>{item.value}%</Typography>
                      </Stack>
                      <LinearProgress variant="determinate" value={item.value} sx={{ height: 8, borderRadius: 5, bgcolor: '#e9eef6', '& .MuiLinearProgress-bar': { bgcolor: item.color } }} />
                    </Box>
                  ))}
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle2" fontWeight={700}>Next review window</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    Automated approval cycle begins in 18 minutes.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardPage