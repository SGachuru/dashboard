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

const adminItems = [
  { title: 'Approve KYC requests', status: 'Pending' },
  { title: 'Review disputes', status: 'Action needed' },
  { title: 'Manage subscriptions', status: 'Live' },
]

const AdminDashboardPage: NextPage = () => {
  return (
    <PortalShell title="Admin Dashboard" subtitle="Control users, KYC approvals, subscriptions, disputes, analytics, and content management from a central admin workspace." active="Admin">
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Admin operations</Typography>
              <List>
                {adminItems.map((item) => (
                  <ListItem key={item.title} sx={{ px: 0 }}>
                    <ListItemText primary={item.title} />
                    <Chip label={item.status} color="primary" size="small" />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>Platform metrics</Typography>
              <Stack spacing={1.5} sx={{ mt: 1.5 }}>
                <Box><Typography variant="body2" color="text.secondary">Users</Typography><Typography variant="h6" fontWeight={700}>12.4k</Typography></Box>
                <Box><Typography variant="body2" color="text.secondary">Active subscriptions</Typography><Typography variant="h6" fontWeight={700}>3.8k</Typography></Box>
                <Box><Typography variant="body2" color="text.secondary">Dispute rate</Typography><Typography variant="h6" fontWeight={700}>1.2%</Typography></Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PortalShell>
  )
}

export default AdminDashboardPage
