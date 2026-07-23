import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography
} from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'
import PartnerPortalShell from '../../components/PartnerPortalShell'

const PartnerRegistrationPage: NextPage = () => {
  const [form, setForm] = useState({ company: '', type: 'Supplier', contact: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <PartnerPortalShell
      title="Partner Registration"
      subtitle="Register your company as a supplier, financier, or trainer. Admin approval is required."
      active="Settings"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
            <CardContent sx={{ p: 3 }}>
              {submitted ? (
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={700} color="#f8fafc">Application received</Typography>
                  <Typography variant="body2" color="#94a3b8">Your registration is pending admin approval. You will be notified once it is reviewed.</Typography>
                </Stack>
              ) : (
                <>
                  <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>Partner registration</Typography>
                  <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="caption" color="#94a3b8" sx={{ mb: 0.5, display: 'block' }}>Company name</Typography>
                          <Box sx={{ bgcolor: '#0f172a', border: '1px solid #334155', borderRadius: 2, px: 2, py: 1.5 }}>
                            <Typography variant="body2" color="#f8fafc">{form.company || '—'}</Typography>
                          </Box>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="caption" color="#94a3b8" sx={{ mb: 0.5, display: 'block' }}>Partner type</Typography>
                          <Box sx={{ bgcolor: '#0f172a', border: '1px solid #334155', borderRadius: 2, px: 2, py: 1.5 }}>
                            <Typography variant="body2" color="#f8fafc">{form.type}</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="caption" color="#94a3b8" sx={{ mb: 0.5, display: 'block' }}>Contact person</Typography>
                        <Box sx={{ bgcolor: '#0f172a', border: '1px solid #334155', borderRadius: 2, px: 2, py: 1.5 }}>
                          <Typography variant="body2" color="#f8fafc">{form.contact || '—'}</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="caption" color="#94a3b8" sx={{ mb: 0.5, display: 'block' }}>Email</Typography>
                        <Box sx={{ bgcolor: '#0f172a', border: '1px solid #334155', borderRadius: 2, px: 2, py: 1.5 }}>
                          <Typography variant="body2" color="#f8fafc">{form.email || '—'}</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="caption" color="#94a3b8" sx={{ mb: 0.5, display: 'block' }}>Phone</Typography>
                        <Box sx={{ bgcolor: '#0f172a', border: '1px solid #334155', borderRadius: 2, px: 2, py: 1.5 }}>
                          <Typography variant="body2" color="#f8fafc">{form.phone || '—'}</Typography>
                        </Box>
                      </Box>
                      <Button type="submit" variant="contained" sx={{ bgcolor: '#7c3aed', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#6d28d9' } }}>
                        Submit application
                      </Button>
                    </Stack>
                  </Box>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4, height: '100%', bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={700} color="#f8fafc" sx={{ mb: 2 }}>What partners get</Typography>
              <Box component="ul" sx={{ pl: 2.5, color: '#94a3b8', lineHeight: 1.8 }}>
                <li>Approved partner status</li>
                <li>Access to campaign creation</li>
                <li>Lead analytics and reporting</li>
                <li>Content publishing tools</li>
                <li>Billing and invoicing</li>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PartnerPortalShell>
  )
}

export default PartnerRegistrationPage
