import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import type { NextPage } from 'next'

interface PortalCard {
  slug: string
  title: string
  badge: string
  accent: string
  description: string
  cta: string
}

interface DemoAccount {
  email: string
  password: string
  slug: string
  title: string
}

const portalCards: PortalCard[] = [
  {
    slug: 'service-manager',
    title: 'Service Manager Portal',
    badge: 'Operations',
    accent: '#1976d2',
    description: 'Dispatch teams, track technicians, and maintain service quality at a glance.',
    cta: 'Open operations view',
  },
  {
    slug: 'partner-portal',
    title: 'Partner Portal',
    badge: 'Growth',
    accent: '#7b1fa2',
    description: 'Support partner onboarding, campaigns, and performance reporting in one hub.',
    cta: 'Open partner workspace',
  },
  {
    slug: 'admin-dashboard',
    title: 'Admin Dashboard',
    badge: 'Control',
    accent: '#2e7d32',
    description: 'Manage users, approvals, and platform health with executive-level visibility.',
    cta: 'Open admin workspace',
  },
]

const demoAccounts: DemoAccount[] = [
  { email: 'service.manager@portal.com', password: 'service2024', slug: 'service-manager', title: 'Service Manager' },
  { email: 'partner.ops@portal.com', password: 'partner2024', slug: 'partner-portal', title: 'Partner Lead' },
  { email: 'admin@portal.com', password: 'admin2024', slug: 'admin-dashboard', title: 'System Admin' },
]

const HomePage: NextPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const match = demoAccounts.find((account) => account.email === email.trim() && account.password === password)

    if (!match) {
      setError('Use one of the demo credentials shown below to enter the right portal.')
      return
    }

    setError('')
    router.push(`/portal/${match.slug}`)
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f7fb', color: '#0f172a' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} alignItems="stretch">
          <Box sx={{ flex: 1.2 }}>
            <Chip label="Unified enterprise portal" color="primary" sx={{ mb: 2, fontWeight: 700 }} />
            <Typography variant="h3" fontWeight={800} sx={{ mb: 2 }}>
              Bring every portal into one modern operating experience.
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3, maxWidth: 720 }}>
              Give every team a tailored workspace with secure sign-in, clear priorities, and quick access to the tools they need.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
              <Paper sx={{ p: 2.2, borderRadius: 3, minWidth: 180 }}>
                <Typography variant="caption" color="text.secondary">Live workspaces</Typography>
                <Typography variant="h5" fontWeight={700}>3 portals</Typography>
              </Paper>
              <Paper sx={{ p: 2.2, borderRadius: 3, minWidth: 180 }}>
                <Typography variant="caption" color="text.secondary">Focus areas</Typography>
                <Typography variant="h5" fontWeight={700}>Operations • Growth • Governance</Typography>
              </Paper>
            </Stack>

            <Grid container spacing={2}>
              {portalCards.map((portal) => (
                <Grid item xs={12} md={4} key={portal.slug}>
                  <Card sx={{ height: '100%', borderRadius: 4, boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)' }}>
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
                        <Typography variant="subtitle1" fontWeight={700}>{portal.title}</Typography>
                        <Chip label={portal.badge} sx={{ bgcolor: `${portal.accent}18`, color: portal.accent, fontWeight: 700 }} />
                      </Stack>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {portal.description}
                      </Typography>
                      <Button variant="outlined" onClick={() => router.push(`/portal/${portal.slug}`)}>
                        {portal.cta}
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Paper component="form" onSubmit={handleLogin} sx={{ flex: 0.9, p: { xs: 2.5, md: 3 }, borderRadius: 4, boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)' }}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
              Secure portal access
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Sign in with the demo account that matches your team. Each login opens the correct workspace automatically.
            </Typography>

            <Stack spacing={2}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                fullWidth
                required
              />
              {error ? <Typography color="error.main" variant="body2">{error}</Typography> : null}
              <Button type="submit" variant="contained" size="large">
                Enter portal
              </Button>
            </Stack>

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1 }}>
                Demo credentials
              </Typography>
              {demoAccounts.map((account) => (
                <Box key={account.email} sx={{ mb: 1 }}>
                  <Typography variant="body2" fontWeight={600}>{account.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{account.email} / {account.password}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}

export default HomePage
