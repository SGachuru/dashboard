import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography
} from '@mui/material'
import type { NextPage } from 'next'
import ServiceManagerShell from '../../components/ServiceManagerShell'

interface MapMarker {
  id: string
  plumber: string
  status: string
  location: string
  job: string
}

const markers: MapMarker[] = [
  { id: 'MP-01', plumber: 'Mike R.', status: 'On job', location: 'North District', job: 'Leak repair' },
  { id: 'MP-02', plumber: 'Sarah L.', status: 'En route', location: 'West Loop', job: 'Water heater' },
  { id: 'MP-03', plumber: 'Tom B.', status: 'Available', location: 'Downtown', job: '—' },
  { id: 'MP-04', plumber: 'Ana M.', status: 'On job', location: 'Eastside', job: 'Installation' },
]

const statusColor = (status: string) => {
  switch (status) {
    case 'On job':
      return { bg: '#22c55e18', color: '#22c55e' }
    case 'En route':
      return { bg: '#f59e0b18', color: '#f59e0b' }
    case 'Available':
      return { bg: '#3b82f618', color: '#3b82f6' }
    default:
      return { bg: '#94a3b818', color: '#94a3b8' }
  }
}

const MapPage: NextPage = () => {
  return (
    <ServiceManagerShell
      title="Real-Time Map"
      subtitle="View all active plumbers, their status, and current job locations."
      active="Coverage"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={8}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
            <CardContent>
              <Box sx={{ bgcolor: '#0f172a', borderRadius: 2, border: '1px solid #334155', p: 4, minHeight: 360, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack spacing={2} sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight={700} color="#f8fafc">Live map view</Typography>
                  <Typography variant="body2" color="#94a3b8">Map integration placeholder showing technician locations and jobs across service areas.</Typography>
                  <Chip label="24 active" size="small" sx={{ bgcolor: '#22c55e18', color: '#22c55e', fontWeight: 700, alignSelf: 'center' }} />
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Stack spacing={2.5}>
            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Technician status
                </Typography>
                <Stack spacing={1.5}>
                  {markers.map((marker) => {
                    const sc = statusColor(marker.status)
                    return (
                      <Box key={marker.id} sx={{ p: 1.5, borderRadius: 2, bgcolor: '#0f172a', border: '1px solid #334155' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
                          <Typography variant="body2" fontWeight={700} color="#f8fafc">{marker.plumber}</Typography>
                          <Chip label={marker.status} size="small" sx={{ bgcolor: sc.bg, color: sc.color, fontWeight: 700, fontSize: '0.7rem', height: 22, '& .MuiChip-label': { px: 0.75 } }} />
                        </Stack>
                        <Typography variant="caption" color="#94a3b8">{marker.location}</Typography>
                        <Typography variant="body2" color="#cbd5e1" sx={{ mt: 0.5 }}>{marker.job}</Typography>
                      </Box>
                    )
                  })}
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Coverage summary
                </Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Active now</Typography>
                    <Typography variant="body2" fontWeight={700} color="#22c55e">18</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">On job</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">12</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">En route</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">4</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Available</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">2</Typography>
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

export default MapPage
