import {
  Box,
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
import ServiceManagerShell from '../../components/ServiceManagerShell'

interface Dispatch {
  id: string
  title: string
  location: string
  technician: string
  status: string
  priority: string
}

const dispatches: Dispatch[] = [
  { id: 'D-104', title: 'Route 12 active jobs', location: 'North District', technician: 'Mike R.', status: 'Live', priority: 'High' },
  { id: 'D-105', title: 'Reassign technician', location: 'West Loop', technician: 'Sarah L.', status: 'Pending', priority: 'Medium' },
  { id: 'D-106', title: 'Emergency plumbing', location: 'Downtown', technician: 'Tom B.', status: 'Live', priority: 'Urgent' },
  { id: 'D-107', title: 'Water heater install', location: 'Eastside', technician: 'Ana M.', status: 'Scheduled', priority: 'Low' },
]

const ServiceManagerDashboardPage: NextPage = () => {
  const statusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return { bg: '#22c55e18', color: '#22c55e', border: '#22c55e' }
      case 'Scheduled':
        return { bg: '#f59e0b18', color: '#f59e0b', border: '#f59e0b' }
      case 'Pending':
        return { bg: '#94a3b818', color: '#94a3b8', border: '#94a3b8' }
      case 'Urgent':
        return { bg: '#ef444418', color: '#ef4444', border: '#ef4444' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8', border: '#94a3b8' }
    }
  }

  const priorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent':
        return { bg: '#ef444418', color: '#ef4444', border: '#ef4444' }
      case 'High':
        return { bg: '#f59e0b18', color: '#f59e0b', border: '#f59e0b' }
      case 'Medium':
        return { bg: '#3b82f618', color: '#3b82f6', border: '#3b82f6' }
      case 'Low':
        return { bg: '#22c55e18', color: '#22c55e', border: '#22c55e' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8', border: '#94a3b8' }
    }
  }

  return (
    <ServiceManagerShell
      title="Service Manager Dashboard"
      subtitle="Coordinate dispatch operations, map coverage, technician management, and reporting workflows."
      active="Dispatch"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Live Dispatch Board
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="Live updates" size="small" sx={{ bgcolor: '#22c55e18', color: '#22c55e', fontWeight: 700, fontSize: '0.75rem', height: 24 }} />
              </Stack>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#0f172a' }}>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      ID
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Dispatch
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Location
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Technician
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Priority
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dispatches.map((dispatch) => {
                    const sc = statusColor(dispatch.status)
                    const pc = priorityColor(dispatch.priority)
                    return (
                      <TableRow key={dispatch.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>
                          {dispatch.id}
                        </TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>
                          {dispatch.title}
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{dispatch.location}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{dispatch.technician}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip
                            label={dispatch.priority}
                            size="small"
                            sx={{
                              bgcolor: `${pc.color}18`,
                              color: pc.color,
                              fontWeight: 600,
                              fontSize: '0.7rem',
                              height: 22,
                              border: `1px solid ${pc.color}40`,
                              '& .MuiChip-label': { px: 0.75 },
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip
                            label={dispatch.status}
                            size="small"
                            sx={{
                              bgcolor: `${sc.color}18`,
                              color: sc.color,
                              fontWeight: 600,
                              fontSize: '0.7rem',
                              height: 22,
                              border: `1px solid ${sc.color}40`,
                              '& .MuiChip-label': { px: 0.75 },
                            }}
                          />
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
                  Operations snapshot
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body2" color="#94a3b8">Response time</Typography>
                      <Typography variant="h5" fontWeight={800} color="#f8fafc" sx={{ mt: 0.25 }}>17 min</Typography>
                    </Box>
                    <Chip label="-2 min" size="small" sx={{ bgcolor: '#22c55e18', color: '#22c55e', fontWeight: 700, fontSize: '0.75rem' }} />
                  </Box>
                  <Box sx={{ height: 8, borderRadius: 4, bgcolor: '#0f172a', overflow: 'hidden' }}>
                    <Box sx={{ width: '85%', height: '100%', borderRadius: 4, bgcolor: '#1976d2' }} />
                  </Box>
                  <Typography variant="caption" color="#64748b">85% on-time rate</Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h6" fontWeight={700} color="#f8fafc">
                    Technicians
                  </Typography>
                  <Chip label="24 on route" size="small" sx={{ bgcolor: '#1976d218', color: '#1976d2', fontWeight: 700, fontSize: '0.75rem' }} />
                </Stack>
                <Stack spacing={1.5}>
                  {['Mike R.', 'Sarah L.', 'Tom B.', 'Ana M.'].map((name) => (
                    <Box key={name} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 1, borderRadius: 2, bgcolor: '#0f172a', border: '1px solid #334155' }}>
                      <Box sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 700 }}>
                        {name[0]}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" fontWeight={700} color="#f8fafc">{name}</Typography>
                        <Typography variant="caption" color="#64748b">On route</Typography>
                      </Box>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22c55e' }} />
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </ServiceManagerShell>
  )
}

export default ServiceManagerDashboardPage
