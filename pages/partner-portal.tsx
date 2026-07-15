import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import type { NextPage } from 'next'
import PartnerPortalShell from '../components/PartnerPortalShell'

const campaigns = [
  { title: 'Summer Plumbing Offer', status: 'Running' },
  { title: 'Partner Spotlight', status: 'Pending' },
]

const PartnerPortalPage: NextPage = () => {
  return (
    <PartnerPortalShell
      title="Partner Portal"
      subtitle="Support supplier ads, campaign management, and partner engagement in one place."
      active="Campaigns"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Campaigns</Typography>
              <Stack spacing={1.5}>
                {campaigns.map((campaign) => (
                  <Box key={campaign.title} sx={{ p: 1.25, borderRadius: 2, bgcolor: '#f8fafc' }}>
                    <Typography variant="body2" fontWeight={700}>{campaign.title}</Typography>
                    <Chip label={campaign.status} color="primary" size="small" sx={{ mt: 0.75 }} />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>Partner tools</Typography>
              <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                <Box><Typography variant="body2" color="text.secondary">ROI outlook</Typography><Typography variant="h6" fontWeight={700}>+22%</Typography></Box>
                <Box><Typography variant="body2" color="text.secondary">Retention</Typography><Typography variant="h6" fontWeight={700}>89%</Typography></Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PartnerPortalShell>
  )
}

export default PartnerPortalPage
