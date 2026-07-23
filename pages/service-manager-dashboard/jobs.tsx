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
import ServiceManagerShell from '../../components/ServiceManagerShell'

interface Job {
  id: string
  customer: string
  service: string
  location: string
  assigned: string
  status: string
  priority: string
}

const jobs: Job[] = [
  { id: 'WO-501', customer: 'A. Adams', service: 'Leak repair', location: 'North District', assigned: 'Mike R.', status: 'In Progress', priority: 'High' },
  { id: 'WO-502', customer: 'T. Brooks', service: 'Water heater', location: 'West Loop', assigned: 'Sarah L.', status: 'Scheduled', priority: 'Medium' },
  { id: 'WO-503', customer: 'J. Carter', service: 'Drain cleaning', location: 'Downtown', assigned: 'Tom B.', status: 'Pending', priority: 'Low' },
  { id: 'WO-504', customer: 'M. Davis', service: 'Pipe replacement', location: 'Eastside', assigned: 'Ana M.', status: 'In Progress', priority: 'Urgent' },
]

const JobsPage: NextPage = () => {
  const statusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return { bg: '#3b82f618', color: '#3b82f6' }
      case 'Scheduled':
        return { bg: '#f59e0b18', color: '#f59e0b' }
      case 'Pending':
        return { bg: '#94a3b818', color: '#94a3b8' }
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
      title="Job Monitoring"
      subtitle="Track all jobs, statuses, and customer communications."
      active="Dispatch"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Jobs
              </Typography>
              <Button size="small" variant="contained" sx={{ bgcolor: '#1976d2', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#1565c0' } }}>
                + New Job
              </Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#0f172a' }}>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>ID</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Customer</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Service</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Assigned</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Priority</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {jobs.map((job) => {
                    const sc = statusColor(job.status)
                    const pc = priorityColor(job.priority)
                    return (
                      <TableRow key={job.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>{job.id}</TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>{job.customer}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{job.service}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{job.assigned}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={job.priority} size="small" sx={{ bgcolor: `${pc.color}18`, color: pc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={job.status} size="small" sx={{ bgcolor: `${sc.color}18`, color: sc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
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
                  Job summary
                </Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Active jobs</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">128</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Scheduled</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">45</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Pending</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">12</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Communications
                </Typography>
                <Stack spacing={1.5}>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#1976d2' } }}>
                    Message customer
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#1976d2' } }}>
                    Message technician
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#1976d2' } }}>
                    Update job status
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </ServiceManagerShell>
  )
}

export default JobsPage
