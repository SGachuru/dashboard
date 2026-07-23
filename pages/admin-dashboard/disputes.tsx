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

interface Dispute {
  id: string
  complainant: string
  respondent: string
  topic: string
  date: string
  status: string
  priority: string
}

const disputes: Dispute[] = [
  { id: 'DSP-801', complainant: 'A. Adams', respondent: 'Mina Alvarez', topic: 'Service quality', date: '21 Jul', status: 'Open', priority: 'High' },
  { id: 'DSP-802', complainant: 'T. Brooks', respondent: 'Daniel Brooks', topic: 'Billing dispute', date: '20 Jul', status: 'In Review', priority: 'Medium' },
  { id: 'DSP-803', complainant: 'J. Carter', respondent: 'Sara Kim', topic: 'No-show', date: '19 Jul', status: 'Resolved', priority: 'Low' },
  { id: 'DSP-804', complainant: 'M. Davis', respondent: 'James Wilson', topic: 'Refund request', date: '18 Jul', status: 'Open', priority: 'Urgent' },
]

const AdminDisputesPage: NextPage = () => {
  const statusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return { bg: '#ef444418', color: '#ef4444' }
      case 'In Review':
        return { bg: '#f59e0b18', color: '#f59e0b' }
      case 'Resolved':
        return { bg: '#22c55e18', color: '#22c55e' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8' }
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
      title="Disputes"
      subtitle="Review complaints, communicate with parties, issue warnings or refunds."
      active="Disputes"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Disputes
              </Typography>
              <Button size="small" variant="outlined" sx={{ borderColor: '#334155', color: '#dc2626', fontWeight: 700, '&:hover': { borderColor: '#dc2626' } }}>
                Export
              </Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#0f172a' }}>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>ID</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Complainant</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Respondent</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Topic</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Priority</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {disputes.map((dispute) => {
                    const sc = statusColor(dispute.status)
                    const pc = priorityColor(dispute.priority)
                    return (
                      <TableRow key={dispute.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>{dispute.id}</TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>{dispute.complainant}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{dispute.respondent}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{dispute.topic}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={dispute.priority} size="small" sx={{ bgcolor: pc.bg, color: pc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={dispute.status} size="small" sx={{ bgcolor: sc.bg, color: sc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
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
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h6" fontWeight={700} color="#f8fafc">
                    Dispute summary
                  </Typography>
                  <Chip label="4 open" size="small" sx={{ bgcolor: '#ef444418', color: '#ef4444', fontWeight: 700, fontSize: '0.75rem' }} />
                </Stack>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Open</Typography>
                    <Typography variant="body2" fontWeight={700} color="#ef4444">2</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">In review</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f59e0b">1</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Resolved</Typography>
                    <Typography variant="body2" fontWeight={700} color="#22c55e">1</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Admin actions
                </Typography>
                <Stack spacing={1.5}>
                  <Button variant="contained" sx={{ bgcolor: '#dc2626', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#b91c1c' } }}>
                    Issue warning
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', '&:hover': { borderColor: '#dc2626' } }}>
                    Process refund
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', '&:hover': { borderColor: '#dc2626' } }}>
                    Contact parties
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </AdminDashboardShell>
  )
}

export default AdminDisputesPage
