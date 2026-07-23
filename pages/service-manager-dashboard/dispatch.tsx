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
import { useState } from 'react'
import ServiceManagerShell from '../../components/ServiceManagerShell'

interface DispatchRecord {
  id: string
  job: string
  customer: string
  location: string
  technician: string
  status: string
  priority: string
}

const dispatchRecords: DispatchRecord[] = [
  { id: 'DSP-401', job: 'Leak repair', customer: 'A. Adams', location: 'North District', technician: 'Mike R.', status: 'Assigned', priority: 'High' },
  { id: 'DSP-402', job: 'Water heater install', customer: 'T. Brooks', location: 'West Loop', technician: 'Sarah L.', status: 'Pending', priority: 'Medium' },
  { id: 'DSP-403', job: 'Emergency plumbing', customer: 'J. Carter', location: 'Downtown', technician: 'Unassigned', status: 'Unassigned', priority: 'Urgent' },
]

const DispatchPage: NextPage = () => {
  const [autoAssign, setAutoAssign] = useState(false)
  const statusColor = (status: string) => {
    switch (status) {
      case 'Assigned':
        return { bg: '#22c55e18', color: '#22c55e' }
      case 'Pending':
        return { bg: '#f59e0b18', color: '#f59e0b' }
      case 'Unassigned':
        return { bg: '#ef444418', color: '#ef4444' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8' }
    }
  }
  const priorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent':
        return { bg: '#ef444418', color: '#ef4444' }
      case 'High':
        return { bg: '#f59e0b18', color: '#f59e0b' }
      case 'Medium':
        return { bg: '#3b82f618', color: '#3b82f6' }
      case 'Low':
        return { bg: '#22c55e18', color: '#22c55e' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8' }
    }
  }

  return (
    <ServiceManagerShell
      title="Dispatch & Assign"
      subtitle="Assign jobs to specific plumbers or enable auto-assignment."
      active="Dispatch"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Dispatch Queue
              </Typography>
              <Button size="small" variant="contained" sx={{ bgcolor: '#1976d2', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#1565c0' } }}>
                + Manual Assign
              </Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#0f172a' }}>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>ID</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Job</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Customer</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Technician</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Priority</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dispatchRecords.map((record) => {
                    const sc = statusColor(record.status)
                    const pc = priorityColor(record.priority)
                    return (
                      <TableRow key={record.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>{record.id}</TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>{record.job}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{record.customer}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{record.technician}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={record.priority} size="small" sx={{ bgcolor: `${pc.color}18`, color: pc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={record.status} size="small" sx={{ bgcolor: `${sc.color}18`, color: sc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Stack spacing={2.5}>
            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Assignment mode
                </Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="#94a3b8">Auto-assignment</Typography>
                    <Button variant={autoAssign ? 'contained' : 'outlined'} size="small" sx={autoAssign ? { bgcolor: '#22c55e', color: '#fff', '&:hover': { bgcolor: '#16a34a' } } : { borderColor: '#334155', color: '#94a3b8' }} onClick={() => setAutoAssign((prev) => !prev)}>
                      {autoAssign ? 'On' : 'Off'}
                    </Button>
                  </Box>
                  <Typography variant="caption" color="#64748b">When enabled, jobs are assigned to the nearest available plumber automatically.</Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Dispatch summary
                </Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Pending</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f59e0b">1</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Assigned</Typography>
                    <Typography variant="body2" fontWeight={700} color="#22c55e">2</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Unassigned</Typography>
                    <Typography variant="body2" fontWeight={700} color="#ef4444">1</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </ServiceManagerShell>
  )
}

export default DispatchPage
