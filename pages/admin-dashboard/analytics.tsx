import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import type { NextPage } from 'next'
import AdminDashboardShell from '../../components/AdminDashboardShell'

interface KPI {
  label: string
  value: string
  trend: string
  trendUp: boolean
}

const kpis: KPI[] = [
  { label: 'Bookings', value: '1,482', trend: '+12%', trendUp: true },
  { label: 'Revenue', value: '$284k', trend: '+8%', trendUp: true },
  { label: 'Retention', value: '87%', trend: '+2%', trendUp: true },
  { label: 'Churn', value: '3.2%', trend: '-0.4%', trendUp: true },
  { label: 'Response time', value: '14 min', trend: '-2 min', trendUp: true },
  { label: 'Active users', value: '12.4k', trend: '+18%', trendUp: true },
]

const AdminAnalyticsPage: NextPage = () => {
  return (
    <AdminDashboardShell
      title="Analytics"
      subtitle="Platform-wide KPIs: bookings, revenue, retention, churn, response time."
      active="Overview"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Button size="small" variant="contained" sx={{ bgcolor: '#dc2626', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#b91c1c' } }}>7 days</Button>
            <Button size="small" variant="outlined" sx={{ borderColor: '#334155', color: '#94a3b8', '&:hover': { borderColor: '#dc2626', color: '#f8fafc' } }}>30 days</Button>
            <Button size="small" variant="outlined" sx={{ borderColor: '#334155', color: '#94a3b8', '&:hover': { borderColor: '#dc2626', color: '#f8fafc' } }}>90 days</Button>
          </Stack>
        </Grid>

        {kpis.map((kpi) => (
          <Grid item xs={12} sm={6} md={4} key={kpi.label}>
            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', '&:hover': { borderColor: '#475569' } }}>
              <CardContent>
                <Typography variant="caption" color="#94a3b8" sx={{ display: 'block', mb: 0.75 }}>
                  {kpi.label}
                </Typography>
                <Typography variant="h4" fontWeight={800} color="#f8fafc" sx={{ letterSpacing: '-0.02em' }}>
                  {kpi.value}
                </Typography>
                <Typography variant="caption" color={kpi.trendUp ? '#22c55e' : '#ef4444'} sx={{ mt: 1.5, display: 'block', fontWeight: 600 }}>
                  {kpi.trendUp ? '↑' : '↓'} {kpi.trend}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12} lg={6}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Revenue trend
              </Typography>
              <Chip label="Live" size="small" sx={{ bgcolor: '#22c55e18', color: '#22c55e', fontWeight: 700, fontSize: '0.75rem' }} />
            </Box>
            <Box sx={{ p: 3 }}>
              <Stack spacing={1.5}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="#94a3b8">Today</Typography>
                  <Typography variant="body2" fontWeight={700} color="#f8fafc">$8,420</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="#94a3b8">This week</Typography>
                  <Typography variant="body2" fontWeight={700} color="#f8fafc">$54,210</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="#94a3b8">This month</Typography>
                  <Typography variant="body2" fontWeight={700} color="#f8fafc">$198,400</Typography>
                </Box>
                <Box sx={{ height: 8, borderRadius: 4, bgcolor: '#0f172a', overflow: 'hidden' }}>
                  <Box sx={{ width: '68%', height: '100%', borderRadius: 4, bgcolor: '#dc2626' }} />
                </Box>
                <Typography variant="caption" color="#64748b">68% of monthly target</Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Retention vs churn
              </Typography>
              <Chip label="Monthly" size="small" sx={{ bgcolor: '#1e293b', color: '#94a3b8', border: '1px solid #334155' }} />
            </Box>
            <Box sx={{ p: 3 }}>
              <Stack spacing={1.5}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="#94a3b8">Retention</Typography>
                  <Typography variant="body2" fontWeight={700} color="#22c55e">87%</Typography>
                </Box>
                <Box sx={{ height: 8, borderRadius: 4, bgcolor: '#0f172a', overflow: 'hidden' }}>
                  <Box sx={{ width: '87%', height: '100%', borderRadius: 4, bgcolor: '#22c55e' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                  <Typography variant="body2" color="#94a3b8">Churn</Typography>
                  <Typography variant="body2" fontWeight={700} color="#ef4444">3.2%</Typography>
                </Box>
                <Box sx={{ height: 8, borderRadius: 4, bgcolor: '#0f172a', overflow: 'hidden' }}>
                  <Box sx={{ width: '3.2%', height: '100%', borderRadius: 4, bgcolor: '#ef4444' }} />
                </Box>
              </Stack>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </AdminDashboardShell>
  )
}

export default AdminAnalyticsPage
