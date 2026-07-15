import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import type { NextPage } from 'next'
import PortalShell from '../components/PortalShell'

const campaigns = [
  { title: 'Summer Plumbing Offer', status: 'Running' },
  { title: 'Partner Spotlight', status: 'Pending' },
]

const PartnerPortalPage: NextPage = () => {
  return (
    <PortalShell title="Partner Portal" subtitle="Support supplier ads, campaign management, and partner engagement in one place." active="Partner Portal">
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Campaigns</Typography>
              <List>
                {campaigns.map((campaign) => (
                  <ListItem key={campaign.title} sx={{ px: 0 }}>
                    <ListItemText primary={campaign.title} />
                    <Chip label={campaign.status} color="primary" size="small" />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>Partner tools</Typography>
              <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                <Box><Typography variant="body2" color="text.secondary">Ad inventory</Typography><Typography variant="h6" fontWeight={700}>24 placements</Typography></Box>
                <Box><Typography variant="body2" color="text.secondary">Lead generation</Typography><Typography variant="h6" fontWeight={700}>312 leads</Typography></Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PortalShell>
  )
}

export default PartnerPortalPage
