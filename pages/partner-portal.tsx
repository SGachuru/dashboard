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
import PartnerPortalShell from '../components/PartnerPortalShell'

interface Campaign {
  id: string
  title: string
  startDate: string
  endDate: string
  status: string
  leads: string
  conversion: string
}

const campaigns: Campaign[] = [
  { id: 'CAM-201', title: 'Summer Plumbing Offer', startDate: '01 Jul', endDate: '31 Aug', status: 'Running', leads: '142', conversion: '24%' },
  { id: 'CAM-202', title: 'Partner Spotlight', startDate: '15 Jul', endDate: '15 Sep', status: 'Pending', leads: '85', conversion: '18%' },
  { id: 'CAM-203', title: 'Emergency Services Promo', startDate: '01 Aug', endDate: '30 Sep', status: 'Scheduled', leads: '210', conversion: '31%' },
]

const PartnerPortalPage: NextPage = () => {
  const statusColor = (status: string) => {
    switch (status) {
      case 'Running':
        return { bg: '#d1fae5', color: '#065f46' }
      case 'Pending':
        return { bg: '#fef3c7', color: '#92400e' }
      case 'Scheduled':
        return { bg: '#dbeafe', color: '#1e40af' }
      case 'Paused':
        return { bg: '#f1f5f9', color: '#475569' }
      default:
        return { bg: '#f1f5f9', color: '#475569' }
    }
  }

  return (
    <PartnerPortalShell
      title="Partner Portal"
      subtitle="Support supplier ads, campaign management, and partner engagement in one place."
      active="Campaigns"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Active Campaigns
              </Typography>
              <Button size="small" variant="outlined" sx={{ borderColor: '#334155', color: '#7c3aed', fontWeight: 700, '&:hover': { borderColor: '#7c3aed' } }}>
                Export
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
                      Campaign
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Duration
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Leads
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Conv.
                    </TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {campaigns.map((campaign) => {
                    const sc = statusColor(campaign.status)
                    return (
                      <TableRow key={campaign.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>
                          {campaign.id}
                        </TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>
                          {campaign.title}
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>
                          <Box>
                            <Typography variant="body2" sx={{ color: '#cbd5e1' }}>{campaign.startDate}</Typography>
                            <Typography variant="caption" sx={{ color: '#64748b' }}>→ {campaign.endDate}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{campaign.leads}</TableCell>
                        <TableCell sx={{ color: '#22c55e', fontWeight: 700, borderBottom: '1px solid #1e293b' }}>{campaign.conversion}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip
                            label={campaign.status}
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
                  Partner tools
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body2" color="#94a3b8">ROI outlook</Typography>
                      <Typography variant="h5" fontWeight={800} color="#f8fafc" sx={{ mt: 0.25 }}>+22%</Typography>
                    </Box>
                    <Chip label="Healthy" size="small" sx={{ bgcolor: '#22c55e18', color: '#22c55e', fontWeight: 700, fontSize: '0.75rem' }} />
                  </Box>
                  <Box sx={{ height: 8, borderRadius: 4, bgcolor: '#0f172a', overflow: 'hidden' }}>
                    <Box sx={{ width: '78%', height: '100%', borderRadius: 4, bgcolor: '#7c3aed' }} />
                  </Box>
                  <Typography variant="caption" color="#64748b">78% of monthly target</Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h6" fontWeight={700} color="#f8fafc">
                    Retention
                  </Typography>
                  <Chip label="89%" size="small" sx={{ bgcolor: '#7c3aed18', color: '#7c3aed', fontWeight: 700, fontSize: '0.75rem' }} />
                </Stack>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Active partners</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">36</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Pending review</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">8</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Avg. partnership</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">14 mo</Typography>
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

export default PartnerPortalPage
