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
import PartnerPortalShell from '../../components/PartnerPortalShell'

interface Offer {
  id: string
  title: string
  type: string
  date: string
  status: string
  views: string
}

const offers: Offer[] = [
  { id: 'OFF-301', title: 'Summer Plumbing Bundle', type: 'Product', date: '10 Jul', status: 'Published', views: '2.4k' },
  { id: 'OFF-302', title: 'Training: Modern Pipe Systems', type: 'Video', date: '14 Jul', status: 'Published', views: '891' },
  { id: 'OFF-303', title: 'Financing 0% Intro', type: 'Financing', date: '16 Jul', status: 'In Review', views: '1.1k' },
  { id: 'OFF-304', title: 'Customer Retention Guide', type: 'Guide', date: '18 Jul', status: 'Draft', views: '—' },
]

const PartnerOffersPage: NextPage = () => {
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
    <PartnerPortalShell
      title="Offers & Content"
      subtitle="Publish training videos, guides, financing products, and manage offer listings."
      active="Offers"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Published Content
              </Typography>
              <Button size="small" variant="contained" sx={{ bgcolor: '#7c3aed', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#6d28d9' } }}>
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
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Date</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Status</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155', textAlign: 'right' }}>Views</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {offers.map((offer) => {
                    const sc = statusColor(offer.status)
                    return (
                      <TableRow key={offer.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>{offer.id}</TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>{offer.title}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>
                          <Chip label={offer.type} size="small" sx={{ bgcolor: '#7c3aed18', color: '#7c3aed', fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{offer.date}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={offer.status} size="small" sx={{ bgcolor: sc.bg, color: sc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
                        </TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 700, borderBottom: '1px solid #1e293b', textAlign: 'right' }}>{offer.views}</TableCell>
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
                    Upload Content
                  </Typography>
                  <Chip label="Pro" size="small" sx={{ bgcolor: '#7c3aed18', color: '#7c3aed', fontWeight: 700, fontSize: '0.75rem' }} />
                </Stack>
                <Stack spacing={1.5}>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#7c3aed' } }}>
                    📹 Upload Training Video
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#7c3aed' } }}>
                    📄 Upload Guide
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: '#334155', color: '#f8fafc', justifyContent: 'flex-start', '&:hover': { borderColor: '#7c3aed' } }}>
                    💳 Add Financing Product
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Engagement summary
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="#94a3b8">Total views</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">4.4k</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="#94a3b8">Published</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">2</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="#94a3b8">In review</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">1</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </PartnerPortalShell>
  )
}

export default PartnerOffersPage
