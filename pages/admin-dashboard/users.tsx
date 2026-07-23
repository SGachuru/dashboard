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

interface UserRecord {
  id: string
  name: string
  role: string
  status: string
  joined: string
  lastActive: string
}

const users: UserRecord[] = [
  { id: 'USR-401', name: 'A. Adams', role: 'Customer', status: 'Active', joined: '12 Mar', lastActive: '2 min ago' },
  { id: 'USR-402', name: 'Mina Alvarez', role: 'Plumber', status: 'Active', joined: '05 Jan', lastActive: '18 min ago' },
  { id: 'USR-403', name: 'Daniel Brooks', role: 'Partner', status: 'Suspended', joined: '20 Apr', lastActive: '3 days ago' },
  { id: 'USR-404', name: 'Sara Kim', role: 'Customer', status: 'Banned', joined: '09 Feb', lastActive: '—' },
  { id: 'USR-405', name: 'James Wilson', role: 'Manager', status: 'Active', joined: '15 May', lastActive: '1 hr ago' },
]

const AdminUsersPage: NextPage = () => {
  const statusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return { bg: '#22c55e18', color: '#22c55e' }
      case 'Suspended':
        return { bg: '#f59e0b18', color: '#f59e0b' }
      case 'Banned':
        return { bg: '#ef444418', color: '#ef4444' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8' }
    }
  }

  return (
    <AdminDashboardShell
      title="User Management"
      subtitle="Approve, suspend, or ban customers, plumbers, managers, and partners."
      active="Users"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Users
              </Typography>
              <Chip label={`${users.length} total`} size="small" sx={{ bgcolor: '#1e293b', color: '#94a3b8', border: '1px solid #334155' }} />
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#0f172a' }}>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>ID</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Name</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Role</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Status</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Last active</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => {
                    const sc = statusColor(user.status)
                    return (
                      <TableRow key={user.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>{user.id}</TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>{user.name}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>
                          <Chip label={user.role} size="small" sx={{ bgcolor: '#dc262618', color: '#dc2626', fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={user.status} size="small" sx={{ bgcolor: sc.bg, color: sc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{user.lastActive}</TableCell>
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
                  User summary
                </Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Total users</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">1,247</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Active</Typography>
                    <Typography variant="body2" fontWeight={700} color="#22c55e">1,180</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Suspended</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f59e0b">42</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Banned</Typography>
                    <Typography variant="body2" fontWeight={700} color="#ef4444">25</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Quick actions
                </Typography>
                <Stack spacing={1.5}>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#dc2626' } }}>
                    Suspend selected
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#dc2626' } }}>
                    Ban selected
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#dc2626' } }}>
                    Restore selected
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

export default AdminUsersPage
