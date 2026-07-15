import { useRouter } from 'next/router'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import type { NextPage } from 'next'

interface PortalConfig {
  title: string
  badge: string
  accent: string
  headline: string
  summary: string
  hero: string
  metrics: Array<{ label: string; value: string; detail: string }>
  tasks: Array<{ title: string; owner: string; status: string }>
  highlights: Array<{ title: string; description: string }>
}

const portalMap: Record<string, PortalConfig> = {
  'service-manager': {
    title: 'Service Manager Portal',
    badge: 'Operations',
    accent: '#1976d2',
    headline: 'Coordinate teams and deliveries without losing visibility.',
    summary: 'Monitor queue health, dispatch jobs, and keep service quality on track with one live workspace.',
    hero: 'Operations Command Center',
    metrics: [
      { label: 'Active jobs', value: '128', detail: '+9% today' },
      { label: 'Technicians on route', value: '24', detail: '3 need reassignment' },
      { label: 'On-time completion', value: '96%', detail: 'Above target' },
      { label: 'Escalations', value: '7', detail: '2 urgent' },
    ],
    tasks: [
      { title: 'Dispatch 14 priority jobs', owner: 'Ops lead', status: 'In progress' },
      { title: 'Review technician handoff', owner: 'Field manager', status: 'Pending' },
      { title: 'Confirm SLA recovery plan', owner: 'Service desk', status: 'Scheduled' },
    ],
    highlights: [
      { title: 'Live dispatch board', description: 'See jobs, routes, and technician availability in one place.' },
      { title: 'Service health', description: 'Track resolution speed, repeat issues, and service-level outcomes.' },
      { title: 'Account control', description: 'Manage teams, subscriptions, and customer accounts from a single view.' },
    ],
  },
  'partner-portal': {
    title: 'Partner Portal',
    badge: 'Growth',
    accent: '#7b1fa2',
    headline: 'Grow partner performance with clear campaigns and insight.',
    summary: 'Support onboarding, launch offers, and keep partners aligned through a shared performance workspace.',
    hero: 'Partner Growth Hub',
    metrics: [
      { label: 'Active partners', value: '36', detail: '8 pending review' },
      { label: 'Campaign conversions', value: '18.4%', detail: '+3.2% this month' },
      { label: 'Qualified leads', value: '312', detail: '42 new this week' },
      { label: 'Revenue influence', value: '24.8k', detail: 'Healthy pipeline' },
    ],
    tasks: [
      { title: 'Approve partner onboarding', owner: 'Growth team', status: 'Pending' },
      { title: 'Review campaign spend', owner: 'Marketing', status: 'In review' },
      { title: 'Sync partner incentives', owner: 'Finance', status: 'Scheduled' },
    ],
    highlights: [
      { title: 'Partner onboarding', description: 'Manage registrations, approvals, and onboarding milestones.' },
      { title: 'Campaign reporting', description: 'Compare promotion performance across channels and regions.' },
      { title: 'Lead pipeline', description: 'Monitor engagement, conversion rates, and revenue impact.' },
    ],
  },
  'admin-dashboard': {
    title: 'Admin Dashboard',
    badge: 'Control',
    accent: '#2e7d32',
    headline: 'Run governance and platform health from a single executive layer.',
    summary: 'Approve changes, monitor compliance, and maintain visibility across the full digital platform.',
    hero: 'Governance Control Room',
    metrics: [
      { label: 'Verified accounts', value: '1.2k', detail: '92% approval rate' },
      { label: 'Pending reviews', value: '41', detail: '12 critical' },
      { label: 'System uptime', value: '99.8%', detail: 'Stable' },
      { label: 'Open incidents', value: '3', detail: '1 escalated' },
    ],
    tasks: [
      { title: 'Review KYC submissions', owner: 'Compliance', status: 'Pending' },
      { title: 'Audit permission changes', owner: 'Security', status: 'In progress' },
      { title: 'Publish executive summary', owner: 'Leadership', status: 'Scheduled' },
    ],
    highlights: [
      { title: 'User management', description: 'Approve access, retire users, and monitor role changes.' },
      { title: 'Compliance controls', description: 'Review KYC records and ensure every action is auditable.' },
      { title: 'Operational visibility', description: 'Track uptime, incidents, and platform health in real time.' },
    ],
  },
}

const PortalPage: NextPage = () => {
  const router = useRouter()
  const slug = typeof router.query.slug === 'string' ? router.query.slug : 'service-manager'
  const portal = portalMap[slug] ?? portalMap['service-manager']

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f7fb', color: '#0f172a' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2} sx={{ mb: 3 }}>
          <Box>
            <Chip label={portal.badge} sx={{ bgcolor: `${portal.accent}18`, color: portal.accent, fontWeight: 700, mb: 1.5 }} />
            <Typography variant="h3" fontWeight={800}>{portal.title}</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1, maxWidth: 720 }}>
              {portal.summary}
            </Typography>
          </Box>
          <Button variant="outlined" onClick={() => router.push('/')}>
            Back to portal home
          </Button>
        </Stack>

        <Paper sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 4, mb: 3, boxShadow: '0 16px 35px rgba(15, 23, 42, 0.08)' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={2}>
            <Box>
              <Typography variant="overline" color="primary" fontWeight={700}>{portal.hero}</Typography>
              <Typography variant="h4" fontWeight={700}>{portal.headline}</Typography>
            </Box>
            <Paper sx={{ bgcolor: '#081224', color: 'white', p: 2.2, borderRadius: 3, minWidth: 240 }}>
              <Typography variant="caption" color="grey.400">Signed in as</Typography>
              <Typography variant="subtitle1" fontWeight={700} sx={{ mt: 0.5 }}>Portal operator</Typography>
            </Paper>
          </Stack>
        </Paper>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          {portal.metrics.map((metric) => (
            <Grid item xs={12} sm={6} md={3} key={metric.label}>
              <Paper sx={{ p: 2.2, borderRadius: 3, height: '100%' }}>
                <Typography variant="body2" color="text.secondary">{metric.label}</Typography>
                <Typography variant="h5" fontWeight={700} sx={{ mt: 0.5 }}>{metric.value}</Typography>
                <Typography variant="caption" color="success.main">{metric.detail}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Card sx={{ borderRadius: 4, boxShadow: '0 10px 24px rgba(15, 23, 42, 0.06)' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Today’s workflow queue</Typography>
                <List dense>
                  {portal.tasks.map((task) => (
                    <ListItem key={task.title} sx={{ px: 0 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: `${portal.accent}18`, color: portal.accent, width: 34, height: 34 }}>•</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={task.title} secondary={`${task.owner} • ${task.status}`} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Card sx={{ borderRadius: 4, boxShadow: '0 10px 24px rgba(15, 23, 42, 0.06)' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Portal highlights</Typography>
                {portal.highlights.map((item) => (
                  <Box key={item.title} sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" fontWeight={700}>{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                    <Divider sx={{ mt: 1.5 }} />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default PortalPage
