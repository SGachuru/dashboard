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

interface ContentItem {
  id: string
  title: string
  type: string
  author: string
  status: string
  updated: string
}

const contentItems: ContentItem[] = [
  { id: 'CNT-101', title: 'Getting Started Guide', type: 'Guide', author: 'Content Team', status: 'Published', updated: '18 Jul' },
  { id: 'CNT-102', title: 'Pipe Installation Training', type: 'Video', author: 'Training', status: 'In Review', updated: '17 Jul' },
  { id: 'CNT-103', title: 'FAQ: Payments', type: 'FAQ', author: 'Support', status: 'Published', updated: '16 Jul' },
  { id: 'CNT-104', title: 'App onboarding copy', type: 'App copy', author: 'Product', status: 'Draft', updated: '15 Jul' },
]

const AdminContentPage: NextPage = () => {
  const statusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return { bg: '#22c55e18', color: '#22c55e' }
      case 'In Review':
        return { bg: '#f59e0b18', color: '#f59e0b' }
      case 'Draft':
        return { bg: '#94a3b818', color: '#94a3b8' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8' }
    }
  }

  return (
    <AdminDashboardShell
      title="Content Management"
      subtitle="Manage training content, FAQs, and app copy."
      active="Settings"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Content
              </Typography>
              <Button size="small" variant="contained" sx={{ bgcolor: '#dc2626', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#b91c1c' } }}>
                + New Content
              </Button>
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#0f172a' }}>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>ID</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Title</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Type</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Author</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Updated</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contentItems.map((item) => {
                    const sc = statusColor(item.status)
                    return (
                      <TableRow key={item.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>{item.id}</TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>{item.title}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>
                          <Chip label={item.type} size="small" sx={{ bgcolor: '#dc262618', color: '#dc2626', fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{item.author}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{item.updated}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={item.status} size="small" sx={{ bgcolor: sc.bg, color: sc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
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
                  Content summary
                </Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Total items</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">128</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Published</Typography>
                    <Typography variant="body2" fontWeight={700} color="#22c55e">96</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">In review</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f59e0b">18</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Drafts</Typography>
                    <Typography variant="body2" fontWeight={700} color="#94a3b8">14</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Actions
                </Typography>
                <Stack spacing={1.5}>
                  <Button variant="contained" sx={{ bgcolor: '#dc2626', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#b91c1c' } }}>
                    Publish selected
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', '&:hover': { borderColor: '#dc2626' } }}>
                    Archive selected
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

export default AdminContentPage
