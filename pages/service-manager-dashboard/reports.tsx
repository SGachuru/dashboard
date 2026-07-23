import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography
} from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'
import ServiceManagerShell from '../../components/ServiceManagerShell'

const ReportsPage: NextPage = () => {
  const [period, setPeriod] = useState<'7d' | '30d' | '90d'>('30d')

  const metrics = [
    { label: 'Job volume', value: '1,482', trend: '+12%', trendUp: true },
    { label: 'Completion rate', value: '96%', trend: '+2%', trendUp: true },
    { label: 'Avg response', value: '14 min', trend: '-2 min', trendUp: true },
    { label: 'Plumber performance', value: '4.8/5', trend: '+0.1', trendUp: true },
  ]

  return (
    <ServiceManagerShell
      title="Reporting"
      subtitle="Reports on job volume, completion rates, response times, and plumber performance."
      active="Reports"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Button size="small" variant={period === '7d' ? 'contained' : 'outlined'} sx={period === '7d' ? { bgcolor: '#1976d2', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#1565c0' } } : { borderColor: '#334155', color: '#94a3b8', '&:hover': { borderColor: '#1976d2', color: '#f8fafc' } }} onClick={() => setPeriod('7d')}>
              7 days
            </Button>
            <Button size="small" variant={period === '30d' ? 'contained' : 'outlined'} sx={period === '30d' ? { bgcolor: '#1976d2', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#1565c0' } } : { borderColor: '#334155', color: '#94a3b8', '&:hover': { borderColor: '#1976d2', color: '#f8fafc' } }} onClick={() => setPeriod('30d')}>
              30 days
            </Button>
            <Button size="small" variant={period === '90d' ? 'contained' : 'outlined'} sx={period === '90d' ? { bgcolor: '#1976d2', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#1565c0' } } : { borderColor: '#334155', color: '#94a3b8', '&:hover': { borderColor: '#1976d2', color: '#f8fafc' } }} onClick={() => setPeriod('90d')}>
              90 days
            </Button>
          </Stack>
        </Grid>

        {metrics.map((metric) => (
          <Grid item xs={12} sm={6} md={3} key={metric.label}>
            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', '&:hover': { borderColor: '#475569' } }}>
              <CardContent>
                <Typography variant="caption" color="#94a3b8" sx={{ display: 'block', mb: 0.75 }}>
                  {metric.label}
                </Typography>
                <Typography variant="h4" fontWeight={800} color="#f8fafc" sx={{ letterSpacing: '-0.02em' }}>
                  {metric.value}
                </Typography>
                <Typography variant="caption" color={metric.trendUp ? '#22c55e' : '#ef4444'} sx={{ mt: 1.5, display: 'block', fontWeight: 600 }}>
                  {metric.trendUp ? '↑' : '↓'} {metric.trend}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12} lg={6}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Job volume trend
              </Typography>
              <Chip label="Live" size="small" sx={{ bgcolor: '#22c55e18', color: '#22c55e', fontWeight: 700, fontSize: '0.75rem' }} />
            </Box>
            <Box sx={{ p: 3 }}>
              <Stack spacing={1.5}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="#94a3b8">This week</Typography>
                  <Typography variant="body2" fontWeight={700} color="#f8fafc">342 jobs</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="#94a3b8">Last week</Typography>
                  <Typography variant="body2" fontWeight={700} color="#94a3b8">298 jobs</Typography>
                </Box>
                <Box sx={{ height: 8, borderRadius: 4, bgcolor: '#0f172a', overflow: 'hidden' }}>
                  <Box sx={{ width: '78%', height: '100%', borderRadius: 4, bgcolor: '#1976d2' }} />
                </Box>
                <Typography variant="caption" color="#64748b">78% of weekly target</Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Completion rate
              </Typography>
              <Chip label="Monthly" size="small" sx={{ bgcolor: '#1e293b', color: '#94a3b8', border: '1px solid #334155' }} />
            </Box>
            <Box sx={{ p: 3 }}>
              <Stack spacing={1.5}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="#94a3b8">Completed</Typography>
                  <Typography variant="body2" fontWeight={700} color="#22c55e">96%</Typography>
                </Box>
                <Box sx={{ height: 8, borderRadius: 4, bgcolor: '#0f172a', overflow: 'hidden' }}>
                  <Box sx={{ width: '96%', height: '100%', borderRadius: 4, bgcolor: '#22c55e' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                  <Typography variant="body2" color="#94a3b8">Cancelled</Typography>
                  <Typography variant="body2" fontWeight={700} color="#ef4444">2%</Typography>
                </Box>
                <Box sx={{ height: 8, borderRadius: 4, bgcolor: '#0f172a', overflow: 'hidden' }}>
                  <Box sx={{ width: '2%', height: '100%', borderRadius: 4, bgcolor: '#ef4444' }} />
                </Box>
              </Stack>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </ServiceManagerShell>
  )
}

export default ReportsPage
