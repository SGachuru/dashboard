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
import AdminDashboardShell from '../components/AdminDashboardShell'

interface AdminTask {
  id: string
  title: string
  owner: string
  status: string
  priority: string
  amount?: string
}

const adminTasks: AdminTask[] = [
  { id: 'ADM-301', title: 'Approve KYC requests', owner: 'Compliance Team', status: 'Pending', priority: 'High', amount: '12 pending' },
  { id: 'ADM-302', title: 'Review disputes', owner: 'Support Lead', status: 'Action needed', priority: 'Urgent', amount: '3 open' },
  { id: 'ADM-303', title: 'Manage subscriptions', owner: 'Billing Team', status: 'Live', priority: 'Medium', amount: '3.8k active' },
  { id: 'ADM-304', title: 'Audit permission changes', owner: 'Security', status: 'In Progress', priority: 'Medium', amount: '8 changes' },
  { id: 'ADM-305', title: 'Publish executive summary', owner: 'Leadership', status: 'Scheduled', priority: 'Low', amount: 'Due 28 Jul' },
]

const AdminDashboardPage: NextPage = () => {
  const statusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return { bg: '#d1fae5', color: '#065f46' }
      case 'In Progress':
        return { bg: '#dbeafe', color: '#1e40af' }
      case 'Scheduled':
        return { bg: '#fef3c7', color: '#92400e' }
      case 'Live':
        return { bg: '#dcfce7', color: '#166534' }
      case 'Pending':
        return { bg: '#f1f5f9', color: '#475569' }
      case 'Action needed':
        return { bg: '#fee2e2', color: '#991b1b' }
      default:
        return { bg: '#f1f5f9', color: '#475569' }
    }
  }

  const priorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent':
        return { bg: '#fee2e2', color: '#991b1b' }
      case 'High':
        return { bg: '#fef3c7', color: '#92400e' }
      case 'Medium':
        return { bg: '#dbeafe', color: '#1e40af' }
      case 'Low':
        return { bg: '#d1fae5', color: '#065f46' }
      default:
        return { bg: '#f1f5f9', color: '#475569' }
    }
  }

  return (
    <AdminDashboardShell
      title="Admin Dashboard"
      subtitle="Control users, KYC approvals, subscriptions, disputes, analytics, and content management from a central admin workspace."
      active="Overview"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Admin Operations
              </Typography>
              <Button size="small" variant="outlined" sx={{ borderColor: '#334155', color: '#dc2626', fontWeight: 700, '&:hover': { borderColor: '#dc2626' } }}>
                Escalate
              </Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#0f172a' }}>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      ID
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Task
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Owner
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
                  {adminTasks.map((task) => {
                    const sc = statusColor(task.status)
                    const pc = priorityColor(task.priority)
                    return (
                      <TableRow key={task.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>
                          {task.id}
                        </TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>
                          {task.title}
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{task.owner}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip
                            label={task.priority}
                            size="small"
                            sx={{
                              bgcolor: pc.bg,
                              color: pc.color,
                              fontWeight: 700,
                              fontSize: '0.7rem',
                              height: 22,
                              '& .MuiChip-label': { px: 0.75 },
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip
                            label={task.status}
                            size="small"
                            sx={{
                              bgcolor: sc.bg,
                              color: sc.color,
                              fontWeight: 700,
                              fontSize: '0.7rem',
                              height: 22,
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
                  Platform health
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body2" color="#94a3b8">System uptime</Typography>
                      <Typography variant="h5" fontWeight={800} color="#f8fafc" sx={{ mt: 0.25 }}>99.98%</Typography>
                    </Box>
                    <Chip label="Stable" size="small" sx={{ bgcolor: '#d1fae5', color: '#065f46', fontWeight: 700, fontSize: '0.75rem' }} />
                  </Box>
                  <Box sx={{ height: 8, borderRadius: 4, bgcolor: '#0f172a', overflow: 'hidden' }}>
                    <Box sx={{ width: '99.9%', height: '100%', borderRadius: 4, bgcolor: '#22c55e' }} />
                  </Box>
                  <Typography variant="caption" color="#64748b">30-day average</Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h6" fontWeight={700} color="#f8fafc">
                    Support backlog
                  </Typography>
                  <Chip label="18 tickets" size="small" sx={{ bgcolor: '#fef3c7', color: '#92400e', fontWeight: 700, fontSize: '0.75rem' }} />
                </Stack>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Open</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">18</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Avg. response</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">2.4 hrs</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">SLA compliance</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">94%</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </AdminDashboardShell>
  )
}

export default AdminDashboardPage
