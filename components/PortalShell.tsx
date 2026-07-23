import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  Avatar,
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

interface MetricItem {
  label: string
  value: string
  trend: string
}

interface ChartData {
  label: string
  value: number
  color?: string
}

interface PortalShellProps {
  title: string
  subtitle: string
  active?: string
  role?: string
  children?: ReactNode
  stats?: MetricItem[]
  chartData?: ChartData[]
  tableRows?: Array<{ name: string; meta: string; status: string }>
  menuItems?: Array<{ label: string; href: string; icon: string }>
}

const defaultStats: MetricItem[] = [
  { label: 'Total jobs', value: '248', trend: '+12%' },
  { label: 'Revenue', value: '$18.4k', trend: '+8%' },
  { label: 'Active users', value: '1,284', trend: '+6%' },
  { label: 'Open tickets', value: '31', trend: '-3%' },
]

const defaultMenuItems = [
  { label: 'Home', href: '/', icon: '🏠' },
  { label: 'Login', href: '/customer-login', icon: '🔐' },
  { label: 'Request Service', href: '/request-service', icon: '🛠️' },
  { label: 'Find Plumbers', href: '/find-plumbers', icon: '📍' },
  { label: 'Customer Dashboard', href: '/customer-dashboard', icon: '👤' },
  { label: 'Plumber Dashboard', href: '/plumber-dashboard', icon: '🧰' },
  { label: 'Partner Portal', href: '/partner-portal', icon: '🤝' },
  { label: 'Service Manager', href: '/service-manager-dashboard', icon: '🧭' },
  { label: 'Admin', href: '/admin-dashboard', icon: '⚙️' },
]

const roleAccessRoutes: Record<string, string[]> = {
  Guest: ['/', '/customer-login', '/request-service', '/find-plumbers'],
  Customer: ['/', '/customer-login', '/request-service', '/find-plumbers', '/customer-dashboard'],
  Plumber: ['/', '/customer-login', '/request-service', '/find-plumbers', '/plumber-dashboard'],
  'Service Manager': ['/', '/customer-login', '/request-service', '/find-plumbers', '/service-manager-dashboard'],
  Partner: ['/', '/customer-login', '/request-service', '/find-plumbers', '/partner-portal'],
  Admin: ['/', '/customer-login', '/request-service', '/find-plumbers', '/customer-dashboard', '/plumber-dashboard', '/partner-portal', '/service-manager-dashboard', '/admin-dashboard'],
}

const normalizeRole = (value?: string) => {
  const roleValue = (value || 'Guest').toLowerCase()

  if (roleValue.includes('admin') || roleValue.includes('administrator')) {
    return 'Admin'
  }

  if (roleValue.includes('manager')) {
    return 'Service Manager'
  }

  if (roleValue.includes('partner')) {
    return 'Partner'
  }

  if (roleValue.includes('plumber')) {
    return 'Plumber'
  }

  if (roleValue.includes('customer')) {
    return 'Customer'
  }

  return 'Guest'
}

const canAccessRoute = (role: string, href: string) => {
  const allowedRoutes = roleAccessRoutes[role] || roleAccessRoutes.Guest
  return allowedRoutes.includes(href)
}

const InteractiveBarChart = ({ data = [] }: { data?: ChartData[] }) => {
  const chartItems = data.length > 0 ? data : [
    { label: 'Mon', value: 42, color: '#1f6feb' },
    { label: 'Tue', value: 68, color: '#238636' },
    { label: 'Wed', value: 54, color: '#1f6feb' },
    { label: 'Thu', value: 79, color: '#238636' },
    { label: 'Fri', value: 74, color: '#1f6feb' },
  ]

  return (
    <Box sx={{ mt: 1 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} alignItems="flex-end">
        {chartItems.map((item, index) => (
          <Box key={item.label} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
              sx={{
                width: '100%',
                height: 120,
                borderRadius: 2,
                bgcolor: '#0d1117',
                border: '1px solid #30363d',
                display: 'flex',
                alignItems: 'flex-end',
                p: 1,
                transition: 'all 0.2s ease',
                '&:hover': { borderColor: '#1f6feb' },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: `${Math.min(100, item.value)}%`,
                  borderRadius: 1.5,
                  bgcolor: item.color || '#1f6feb',
                  transition: 'height 0.3s ease',
                }}
              />
            </Box>
            <Typography variant="caption" color="#8b949e" sx={{ mt: 1 }}>{item.label}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

const InteractivePieChart = ({ data = [] }: { data?: ChartData[] }) => {
  const pieData = data.length > 0 ? data : [
    { label: 'Jobs', value: 45, color: '#1f6feb' },
    { label: 'Revenue', value: 35, color: '#238feb' },
    { label: 'Users', value: 20, color: '#2ea043' },
  ]

  const total = pieData.reduce((sum, item) => sum + item.value, 0)
  let cumulativeAngle = 0

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <Box sx={{ position: 'relative', width: 120, height: 120 }}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: `conic-gradient(${pieData.map(item => {
              const start = cumulativeAngle
              cumulativeAngle += (item.value / total) * 360
              return `${item.color || '#1f6feb'} ${start}deg ${cumulativeAngle}deg`
            }).join(', ')})`,
            transition: 'all 0.3s ease',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        />
      </Box>
      <Stack spacing={0.75}>
        {pieData.map((item) => (
          <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: item.color || '#1f6feb' }} />
            <Typography variant="body2" color="#f0f6fc">{item.label}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default function PortalShell({
  title,
  subtitle,
  active = '',
  role = 'Operations',
  children,
  stats = defaultStats,
  chartData,
  tableRows,
  menuItems = defaultMenuItems,
}: PortalShellProps) {
  const router = useRouter()
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

  const currentUserLabel = useMemo(() => {
    if (!session) {
      return 'Guest'
    }
    return `${session.name} • ${session.role}`
  }, [session])

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
                <Typography variant="body2" color="#8b949e">Unified operations workspace</Typography>
              </Box>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ width: { xs: '100%', md: 'auto' }, alignItems: { xs: 'flex-start', sm: 'center' } }}>
              <TextField size="small" placeholder="Search workspace" sx={{ minWidth: { xs: '100%', sm: 220 }, '& .MuiOutlinedInput-root': { bgcolor: '#0d1117', color: '#f0f6fc', borderColor: '#30363d' } }} />
              <Stack direction="row" alignItems="center" spacing={1.25}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: '#1f6feb', fontSize: '0.9rem' }}>{session?.name?.[0] || 'U'}</Avatar>
                <Box>
                  <Typography variant="caption" color="#f0f6fc" fontWeight={700}>{session?.name || 'User Profile'}</Typography>
                  <Typography variant="caption" color="#8b949e" display="block">{currentUserLabel}</Typography>
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
        <Stack spacing={3}>
          <Paper sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <Typography variant="overline" color="#58a6ff" fontWeight={700}>Portal section</Typography>
            <Typography variant="h3" fontWeight={800} color="#f0f6fc">{title}</Typography>
            <Typography variant="body1" color="#8b949e" sx={{ mt: 1, maxWidth: 760 }}>
              {subtitle}
            </Typography>
          </Paper>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} color="#f0f6fc" sx={{ mb: 2 }}>Quick stats</Typography>
                  <Grid container spacing={2}>
                    {stats.slice(0, 2).map((stat) => (
                      <Grid item xs={6} key={stat.label}>
                        <Box component={Link} href={`/${stat.label.toLowerCase().replace(/\s+/g, '-')}`} sx={{ textDecoration: 'none' }}>
                          <Box
                            sx={{
                              p: 1.5,
                              borderRadius: 2,
                              bgcolor: '#0d1117',
                              border: '1px solid #30363d',
                              transition: 'all 0.2s ease',
                              '&:hover': { borderColor: '#1f6feb', cursor: 'pointer' },
                            }}
                          >
                            <Typography variant="body2" color="#8b949e">{stat.label}</Typography>
                            <Typography variant="h5" fontWeight={800} color="#f0f6fc">{stat.value}</Typography>
                            <Chip label={stat.trend} size="small" sx={{ mt: 0.5, bgcolor: '#1f6feb', color: '#fff' }} />
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 4, height: '100%', bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} color="#f0f6fc" sx={{ mb: 2 }}>Data distribution</Typography>
                  <InteractivePieChart data={chartData} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} color="#f0f6fc" sx={{ mb: 2 }}>Performance overview</Typography>
              <InteractiveBarChart data={chartData} />
            </CardContent>
          </Card>

          {tableRows && tableRows.length > 0 ? (
            <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} color="#f0f6fc" sx={{ mb: 2 }}>Recent activity</Typography>
                <Stack spacing={1}>
                  {tableRows.map((row, index) => (
                    <Box key={row.name} component={Link} href="/customer-dashboard" sx={{ textDecoration: 'none' }}>
                      <Box
                        sx={{
                          p: 1.25,
                          borderRadius: 2,
                          bgcolor: '#0d1117',
                          border: '1px solid #30363d',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          transition: 'all 0.2s ease',
                          '&:hover': { bgcolor: '#21262d', cursor: 'pointer' },
                        }}
                      >
                        <Box>
                          <Typography variant="body2" fontWeight={700} color="#f0f6fc">{row.name}</Typography>
                          <Typography variant="caption" color="#8b949e">{row.meta}</Typography>
                        </Box>
                        <Chip label={row.status} size="small" sx={{ bgcolor: row.status === 'Urgent' ? '#da3633' : '#30363d', color: '#fff' }} />
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ) : null}

          {children ? (
            <Paper sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
              {children}
            </Paper>
          ) : null}
        </Stack>
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