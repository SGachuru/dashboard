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

interface LeadRecord {
  id: string
  source: string
  type: string
  date: string
  impressions: number
  clicks: number
  deliveries: number
  engagement: string
}

const leadRecords: LeadRecord[] = [
  { id: 'LD-1001', source: 'Summer Promo', type: 'Call', date: '22 Jul', impressions: 1240, clicks: 86, deliveries: 12, engagement: '7%' },
  { id: 'LD-1002', source: 'Partner Spotlight', type: 'Delivery', date: '21 Jul', impressions: 980, clicks: 54, deliveries: 31, engagement: '6%' },
  { id: 'LD-1003', source: 'Emergency Promo', type: 'Call', date: '20 Jul', impressions: 1560, clicks: 112, deliveries: 8, engagement: '9%' },
  { id: 'LD-1004', source: 'Financing Offer', type: 'Web Form', date: '19 Jul', impressions: 640, clicks: 42, deliveries: 19, engagement: '7%' },
]

const PartnerLeadsPage: NextPage = () => {
  const engagementColor = (value: string) => {
    const n = parseFloat(value)
    if (n >= 8) return { bg: '#22c55e18', color: '#22c55e' }
    if (n >= 6) return { bg: '#f59e0b18', color: '#f59e0b' }
    return { bg: '#ef444418', color: '#ef4444' }
  }

  return (
    <PartnerPortalShell
      title="Lead Analytics"
      subtitle="Track call clicks, delivery requests, impressions, and engagement across campaigns."
      active="Leads"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc">
                Lead Record
              </Typography>
              <Chip label={`${leadRecords.length} records`} size="small" sx={{ bgcolor: '#1e293b', color: '#94a3b8', border: '1px solid #334155' }} />
            </Box>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: '#0f172a' }}>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>ID</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Source</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Type</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Impressions</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Clicks</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Deliveries</TableCell>
                    <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155' }}>Engagement</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leadRecords.map((lead) => {
                    const ec = engagementColor(lead.engagement)
                    return (
                      <TableRow key={lead.id} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                        <TableCell sx={{ color: '#64748b', fontWeight: 600, fontSize: '0.8rem', borderBottom: '1px solid #1e293b' }}>{lead.id}</TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 600, borderBottom: '1px solid #1e293b' }}>{lead.source}</TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>
                          <Chip label={lead.type} size="small" sx={{ bgcolor: '#7c3aed18', color: '#7c3aed', fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', borderBottom: '1px solid #1e293b' }}>{lead.impressions.toLocaleString()}</TableCell>
                        <TableCell sx={{ color: '#f8fafc', fontWeight: 700, borderBottom: '1px solid #1e293b' }}>{lead.clicks}</TableCell>
                        <TableCell sx={{ color: '#22c55e', fontWeight: 700, borderBottom: '1px solid #1e293b' }}>{lead.deliveries}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #1e293b' }}>
                          <Chip label={lead.engagement} size="small" sx={{ bgcolor: ec.bg, color: ec.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
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
                  Performance summary
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body2" color="#94a3b8">Impressions</Typography>
                      <Typography variant="h5" fontWeight={800} color="#f8fafc" sx={{ mt: 0.25 }}>12.4k</Typography>
                    </Box>
                    <Chip label="+18%" size="small" sx={{ bgcolor: '#22c55e18', color: '#22c55e', fontWeight: 700, fontSize: '0.75rem' }} />
                  </Box>
                  <Box sx={{ height: 8, borderRadius: 4, bgcolor: '#0f172a', overflow: 'hidden' }}>
                    <Box sx={{ width: '82%', height: '100%', borderRadius: 4, bgcolor: '#7c3aed' }} />
                  </Box>
                  <Typography variant="caption" color="#64748b">82% of monthly target</Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h6" fontWeight={700} color="#f8fafc">
                    Conversion
                  </Typography>
                  <Chip label="7.3%" size="small" sx={{ bgcolor: '#22c55e18', color: '#22c55e', fontWeight: 700, fontSize: '0.75rem' }} />
                </Stack>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Call clicks</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">292</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Delivery requests</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">70</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Avg. CTR</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">7.5%</Typography>
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

export default PartnerLeadsPage
