import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography
} from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'
import AdminDashboardShell from '../../components/AdminDashboardShell'

const campaignTypes = ['Push', 'SMS', 'Email'] as const
type CampaignType = typeof campaignTypes[number]

const AdminCommunicationsPage: NextPage = () => {
  const [form, setForm] = useState({ type: 'Push' as CampaignType | '', subject: '', audience: 'All users', body: '' })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <AdminDashboardShell
      title="Communications"
      subtitle="Send push notifications, SMS, and email campaigns."
      active="Overview"
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                New campaign
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="caption" color="#94a3b8" sx={{ mb: 0.5, display: 'block' }}>Channel</Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {campaignTypes.map((type) => (
                        <Button
                          key={type}
                          size="small"
                          variant={form.type === type ? 'contained' : 'outlined'}
                          sx={form.type === type ? { bgcolor: '#dc2626', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#b91c1c' } } : { borderColor: '#334155', color: '#94a3b8', '&:hover': { borderColor: '#dc2626', color: '#f8fafc' } }}
                          onClick={() => setForm((prev) => ({ ...prev, type }))}
                          type="button"
                        >
                          {type}
                        </Button>
                      ))}
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="#94a3b8" sx={{ mb: 0.5, display: 'block' }}>Subject / Title</Typography>
                    <Box sx={{ bgcolor: '#0f172a', border: '1px solid #334155', borderRadius: 2, px: 2, py: 1.5 }}>
                      <Typography variant="body2" color="#f8fafc">{form.subject || '—'}</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="#94a3b8" sx={{ mb: 0.5, display: 'block' }}>Audience</Typography>
                    <Box sx={{ bgcolor: '#0f172a', border: '1px solid #334155', borderRadius: 2, px: 2, py: 1.5 }}>
                      <Typography variant="body2" color="#f8fafc">{form.audience}</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="#94a3b8" sx={{ mb: 0.5, display: 'block' }}>Message</Typography>
                    <Box sx={{ bgcolor: '#0f172a', border: '1px solid #334155', borderRadius: 2, px: 2, py: 1.5, minHeight: 96 }}>
                      <Typography variant="body2" color="#94a3b8">{form.body || 'Write your message here.'}</Typography>
                    </Box>
                  </Box>
                  <Button type="submit" variant="contained" sx={{ bgcolor: '#dc2626', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#b91c1c' } }}>
                    Send campaign
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Stack spacing={2.5}>
            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Delivery summary
                </Typography>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Push sent</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">4.2k</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">SMS sent</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">1.8k</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Emails sent</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">9.4k</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="#94a3b8">Open rate</Typography>
                    <Typography variant="body2" fontWeight={700} color="#22c55e">62%</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>
                  Recent campaigns
                </Typography>
                <Stack spacing={1.5}>
                  <Box>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">System maintenance</Typography>
                    <Typography variant="caption" color="#64748b">Push • 2 hours ago</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">New features update</Typography>
                    <Typography variant="caption" color="#64748b">Email • Yesterday</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight={700} color="#f8fafc">Weekend promotion</Typography>
                    <Typography variant="caption" color="#64748b">SMS • 3 days ago</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </AdminDashboardShell>
  )
}

export default AdminCommunicationsPage
