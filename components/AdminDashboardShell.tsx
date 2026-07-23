import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, type ReactNode } from 'react'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

interface MetricItem {
  label: string
  value: string
  trend: string
}

interface MenuItemData {
  label: string
  href: string
  icon: string
}

interface AdminDashboardShellProps {
  title: string
  subtitle: string
  active: string
  children?: ReactNode
  stats?: MetricItem[]
  menuItems?: MenuItemData[]
}

const defaultStats = [
  { label: 'Users', value: '12.4k', trend: '+14% growth' },
  { label: 'Subscriptions', value: '3.8k', trend: '+9% active' },
  { label: 'Dispute rate', value: '1.2%', trend: '-0.3% improved' },
  { label: 'Content updates', value: '64', trend: '+5 published' },
]

const defaultMenuItems = [
  { label: 'Admin Overview', href: '/admin-dashboard', icon: '📊' },
  { label: 'KYC Queue', href: '/admin-dashboard', icon: '🪪' },
  { label: 'Disputes', href: '/admin-dashboard', icon: '⚖️' },
  { label: 'Billing', href: '/admin-dashboard', icon: '💳' },
]

export default function AdminDashboardShell({
  title,
  subtitle,
  active,
  children,
  stats = defaultStats,
  menuItems = defaultMenuItems,
}: AdminDashboardShellProps) {
  const router = useRouter()
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [session, setSession] = useState<{ name: string; role: string } | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const storedSession = window.localStorage.getItem('plumbpro-session')
    if (storedSession) {
      try {
        setSession(JSON.parse(storedSession))
      } catch {
        window.localStorage.removeItem('plumbpro-session')
      }
    }
  }, [])

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('plumbpro-session')
    }
    setSession(null)
    router.push('/customer-login')
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0d1117', color: '#f0f6fc', display: 'flex', flexDirection: 'column' }}>
      <Paper sx={{ borderRadius: 0, bgcolor: '#161b22', borderBottom: '1px solid #30363d', position: 'sticky', top: 0, zIndex: 2, boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2} sx={{ py: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 44, height: 44, borderRadius: 2.5, bgcolor: '#238636', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800 }}>
                PP
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={800} color="#f0f6fc">PlumbPro Portal</Typography>
                <Typography variant="body2" color="#8b949e">Administrative workspace</Typography>
              </Box>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ width: { xs: '100%', md: 'auto' }, alignItems: { xs: 'flex-start', sm: 'center' } }}>
              <TextField size="small" placeholder="Search admin functions" sx={{ minWidth: { xs: '100%', sm: 220 }, '& .MuiOutlinedInput-root': { bgcolor: '#0d1117', color: '#f0f6fc', borderColor: '#30363d' } }} />
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" size="small" sx={{ color: '#f0f6fc', borderColor: '#30363d' }}>🔔 1</Button>
                <Button variant="outlined" size="small" sx={{ color: '#f0f6fc', borderColor: '#30363d' }}>💬 3</Button>
                <Button variant="outlined" size="small" sx={{ color: '#f0f6fc', borderColor: '#30363d' }}>Help</Button>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1.25}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: '#1f6feb', fontSize: '0.9rem' }}>{session?.name?.[0] || 'U'}</Avatar>
                <Box>
                  <Typography variant="caption" color="#f0f6fc" fontWeight={700}>{session?.name || 'Admin Profile'}</Typography>
                  <Typography variant="caption" color="#8b949e" display="block">{session ? `${session.name} • Admin` : 'Guest'}</Typography>
                </Box>
                <Button variant="contained" size="small" onClick={handleLogout} sx={{ bgcolor: '#238636', '&:hover': { bgcolor: '#2ea043' } }}>
                  {session ? 'Logout' : 'Login'}
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Paper>

      <Container maxWidth="xl" sx={{ py: { xs: 3, md: 4 }, flex: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Paper sx={{ p: 2.5, borderRadius: 4, height: '100%', transition: 'all 0.2s ease', bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
                <Box>
                  <Typography variant="overline" color="#58a6ff" fontWeight={700}>Admin workspace</Typography>
                  <Typography variant="h5" fontWeight={800} color="#f0f6fc">{isSidebarCollapsed ? 'Menu' : 'Admin'}</Typography>
                </Box>
                <Button variant="outlined" size="small" onClick={() => setIsSidebarCollapsed((prev) => !prev)} sx={{ color: '#f0f6fc', borderColor: '#30363d' }}>
                  {isSidebarCollapsed ? '›' : '‹'}
                </Button>
              </Stack>

              {!isSidebarCollapsed ? (
                <>
                  <Stack spacing={1} sx={{ mt: 2 }}>
                    {menuItems.map((item, index) => (
                      <Box
                        key={`${item.href}-${index}`}
                        component={Link}
                        href={item.href}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          px: 1.5,
                          py: 1,
                          borderRadius: 2,
                          textDecoration: 'none',
                          color: active === item.label ? '#fff' : '#c9d1d9',
                          bgcolor: active === item.label ? '#1f6feb' : 'transparent',
                          '&:hover': { bgcolor: active === item.label ? '#1f6feb' : '#21262d', cursor: 'pointer' },
                        }}
                      >
                        <Box component="span" sx={{ mr: 1 }}>{item.icon}</Box>
                        <Typography variant="body2" fontWeight={active === item.label ? 700 : 400}>{item.label}</Typography>
                      </Box>
                    ))}
                  </Stack>
                  <Divider sx={{ my: 2.5, borderColor: '#30363d' }} />
                  <Box sx={{ p: 1.5, borderRadius: 3, bgcolor: '#0d1117', border: '1px solid #30363d' }}>
                    <Typography variant="caption" color="#8b949e">Current page</Typography>
                    <Typography variant="body2" fontWeight={700} color="#f0f6fc">{title}</Typography>
                  </Box>
                </>
              ) : (
                <Stack spacing={1} sx={{ mt: 2 }}>
                  {menuItems.map((item, index) => (
                    <Box
                      key={`${item.href}-${index}`}
                      component={Link}
                      href={item.href}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 2,
                        px: 1.2,
                        py: 1,
                        textDecoration: 'none',
                        color: active === item.label ? '#fff' : '#c9d1d9',
                        bgcolor: active === item.label ? '#1f6feb' : 'transparent',
                        '&:hover': { bgcolor: active === item.label ? '#1f6feb' : '#21262d', cursor: 'pointer' },
                      }}
                    >
                      <Box component="span">{item.icon}</Box>
                    </Box>
                  ))}
                </Stack>
              )}
            </Paper>
          </Grid>

          <Grid item xs={12} lg={9}>
            <Stack spacing={3}>
              <Paper sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2}>
                  <Box>
                    <Typography variant="overline" color="#58a6ff" fontWeight={700}>Administrative view</Typography>
                    <Typography variant="h3" fontWeight={800} color="#f0f6fc">{title}</Typography>
                    <Typography variant="body1" color="#8b949e" sx={{ mt: 1, maxWidth: 760 }}>
                      {subtitle}
                    </Typography>
                  </Box>
                  <Chip label="Admin" size="small" sx={{ bgcolor: '#1f6feb', color: '#fff' }} />
                </Stack>
              </Paper>

              <Grid container spacing={2}>
                {stats.map((stat, index) => (
                  <Grid item xs={12} sm={6} lg={3} key={stat.label}>
                    <Box component={Link} href="/admin-dashboard" sx={{ textDecoration: 'none' }}>
                      <Card sx={{ borderRadius: 3, height: '100%', bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none', '&:hover': { borderColor: '#1f6feb', cursor: 'pointer' } }}>
                        <CardContent>
                          <Typography variant="body2" color="#8b949e">{stat.label}</Typography>
                          <Typography variant="h5" fontWeight={800} color="#f0f6fc" sx={{ mt: 0.5 }}>{stat.value}</Typography>
                          <Chip label={stat.trend} size="small" sx={{ mt: 1, bgcolor: '#238636', color: '#fff' }} />
                        </CardContent>
                      </Card>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} color="#f0f6fc" sx={{ mb: 2 }}>Platform analytics</Typography>
                  <Box sx={{ mt: 1 }}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} alignItems="flex-end">
                      {[
                        { label: 'Jan', value: 62, color: '#1f6feb' },
                        { label: 'Feb', value: 68, color: '#238636' },
                        { label: 'Mar', value: 74, color: '#1f6feb' },
                        { label: 'Apr', value: 79, color: '#238636' },
                        { label: 'May', value: 74, color: '#1f6feb' },
                      ].map((item) => (
                        <Box key={item.label} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <Box
                            sx={{
                              width: '100%',
                              height: 100,
                              borderRadius: 2,
                              bgcolor: '#0d1117',
                              border: '1px solid #30363d',
                              display: 'flex',
                              alignItems: 'flex-end',
                              p: 1,
                              transition: 'all 0.2s ease',
                              '&:hover': { borderColor: '#1f6feb', cursor: 'pointer' },
                            }}
                          >
                            <Box sx={{ width: '100%', height: `${item.value}%`, borderRadius: 1.5, bgcolor: item.color }} />
                          </Box>
                          <Typography variant="caption" color="#8b949e" sx={{ mt: 1 }}>{item.label}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </CardContent>
              </Card>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 2.5, borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d' }}>
                    <Typography variant="h6" fontWeight={700} color="#f0f6fc" sx={{ mb: 1.5 }}>Data distribution</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Box sx={{ width: 100, height: 100, borderRadius: '50%', background: 'conic-gradient(#1f6feb 0deg 162deg, #238636 162deg 270deg, #da3633 270deg 360deg)' }} />
                      <Stack spacing={0.75}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#1f6feb' }} />
                          <Typography variant="body2" color="#f0f6fc">Users</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#238636' }} />
                          <Typography variant="body2" color="#f0f6fc">Revenue</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#da3633' }} />
                          <Typography variant="body2" color="#f0f6fc">Issues</Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              {children ? (
                <Paper sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
                  {children}
                </Paper>
              ) : null}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Box component="footer" sx={{ mt: 'auto', borderTop: '1px solid #30363d', bgcolor: '#0d1117' }}>
        <Container maxWidth="xl" sx={{ py: 2.25 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={1.5}>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Button component={Link} href="/" variant="text" size="small" sx={{ color: '#8b949e', px: 0, minWidth: 'auto' }}>Privacy</Button>
              <Button component={Link} href="/" variant="text" size="small" sx={{ color: '#8b949e', px: 0, minWidth: 'auto' }}>Terms</Button>
              <Button component={Link} href="/" variant="text" size="small" sx={{ color: '#8b949e', px: 0, minWidth: 'auto' }}>Support</Button>
            </Stack>
            <Typography variant="caption" color="#8b949e">Version 1.0.0</Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}