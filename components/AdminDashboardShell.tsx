import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, type ReactNode } from 'react'
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import type { NextPage } from 'next'

interface MetricItem {
  label: string
  value: string
  trend: string
  trendUp?: boolean
  icon?: string
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

const defaultStats: MetricItem[] = [
  { label: 'Verified accounts', value: '1.2k', trend: '+14%', trendUp: true, icon: '👤' },
  { label: 'Subscriptions', value: '3.8k', trend: '+9% active', trendUp: true, icon: '💳' },
  { label: 'Dispute rate', value: '1.2%', trend: '-0.3%', trendUp: true, icon: '⚖️' },
  { label: 'Content updates', value: '64', trend: '+5 published', trendUp: true, icon: '📄' },
]

const defaultMenuItems = [
  { label: 'Overview', href: '/admin-dashboard', icon: '📊' },
  { label: 'Users', href: '/admin-dashboard', icon: '👥' },
  { label: 'KYC Queue', href: '/admin-dashboard', icon: '🪪' },
  { label: 'Disputes', href: '/admin-dashboard', icon: '⚖️' },
  { label: 'Billing', href: '/admin-dashboard', icon: '💳' },
  { label: 'Settings', href: '/admin-dashboard', icon: '⚙️' },
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [session, setSession] = useState<{ name: string; role: string } | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
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
    if (typeof window !== 'undefined') window.localStorage.removeItem('plumbpro-session')
    setSession(null)
    router.push('/customer-login')
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#0f172a' }}>
      <Paper
        elevation={0}
        sx={{
          width: isSidebarOpen ? 260 : 72,
          minHeight: '100vh',
          bgcolor: '#020617',
          borderRight: '1px solid #1e293b',
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 0.2s ease',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1100,
        }}
      >
        <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', justifyContent: isSidebarOpen ? 'space-between' : 'center' }}>
          {isSidebarOpen ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.8rem' }}>
                A
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={800} color="#f8fafc" sx={{ lineHeight: 1.1 }}>
                  Admin
                </Typography>
                <Typography variant="caption" color="#64748b" sx={{ display: 'block' }}>
                  Governance
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.8rem' }}>
              A
            </Box>
          )}
        </Box>

        <Stack spacing={0.5} sx={{ px: 1.5, mt: 1 }}>
          {menuItems.map((item) => {
            const isActive = active === item.label
            return (
              <Box
                key={item.label}
                component={Link}
                href={item.href}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  px: isSidebarOpen ? 2 : 1.5,
                  py: 1.25,
                  borderRadius: 2,
                  textDecoration: 'none',
                  color: isActive ? '#f8fafc' : '#94a3b8',
                  bgcolor: isActive ? '#1e293b' : 'transparent',
                  borderLeft: isActive ? '3px solid #dc2626' : '3px solid transparent',
                  transition: 'all 0.15s ease',
                  '&:hover': {
                    bgcolor: isActive ? '#1e293b' : '#1e293b80',
                    color: '#f8fafc',
                  },
                }}
              >
                <Box component="span" sx={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24 }}>
                  {item.icon}
                </Box>
                {isSidebarOpen && (
                  <Typography variant="body2" fontWeight={isActive ? 700 : 400} sx={{ whiteSpace: 'nowrap' }}>
                    {item.label}
                  </Typography>
                )}
              </Box>
            )
          })}
        </Stack>

        <Box sx={{ mt: 'auto', px: 1.5, pb: 2 }}>
          {isSidebarOpen ? (
            <Card sx={{ bgcolor: '#1e293b', border: '1px solid #334155', borderRadius: 2 }}>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="caption" color="#94a3b8" sx={{ display: 'block', mb: 0.5 }}>
                  Signed in as
                </Typography>
                <Typography variant="subtitle2" fontWeight={700} color="#f8fafc">
                  {session?.name || 'Admin Profile'}
                </Typography>
                <Typography variant="caption" color="#64748b" sx={{ display: 'block' }}>
                  {session ? `${session.name} • Admin` : 'Guest'}
                </Typography>
                <Button size="small" variant="outlined" sx={{ mt: 1.5, width: '100%', borderColor: '#334155', color: '#94a3b8', '&:hover': { borderColor: '#dc2626', color: '#f8fafc' } }} onClick={handleLogout}>
                  Sign out
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Button size="small" variant="text" sx={{ color: '#64748b', minWidth: 'auto', p: 1 }} onClick={handleLogout}>
              ⎋
            </Button>
          )}
        </Box>
      </Paper>

      <Box sx={{ flex: 1, ml: `${isSidebarOpen ? 260 : 72}px`, transition: 'margin 0.2s ease', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Paper
          elevation={0}
          sx={{
            px: 3,
            py: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #1e293b',
            bgcolor: '#0f172a',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
            <IconButton size="small" sx={{ color: '#94a3b8' }} onClick={() => setIsSidebarOpen((prev) => !prev)}>
              {isSidebarOpen ? '◂' : '▸'}
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, bgcolor: '#1e293b', borderRadius: 2, px: 2, py: 0.75, maxWidth: 420, flex: 1 }}>
              <Box component="span" sx={{ color: '#64748b', fontSize: '1rem' }}>🔍</Box>
              <InputBase placeholder="Search users, disputes, billing..." sx={{ color: '#f8fafc', width: '100%', '& .MuiInputBase-input::placeholder': { color: '#64748b', opacity: 1 } }} />
            </Box>
          </Box>

          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton size="small" sx={{ color: '#94a3b8', bgcolor: '#1e293b' }}>
              <Badge badgeContent={1} color="error">
                <Box component="span" sx={{ fontSize: '1.1rem' }}>🔔</Box>
              </Badge>
            </IconButton>
            <Avatar sx={{ width: 36, height: 36, bgcolor: '#dc2626', fontSize: '0.9rem', fontWeight: 700 }}>
              {session?.name?.[0] || 'A'}
            </Avatar>
          </Stack>
        </Paper>

        <Container maxWidth="xl" sx={{ py: 4, flex: 1 }}>
          <Stack spacing={4}>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2}>
              <Box>
                <Chip label="Admin" size="small" sx={{ bgcolor: '#dc262618', color: '#dc2626', fontWeight: 700, mb: 1.5 }} />
                <Typography variant="h3" fontWeight={800} color="#f8fafc" sx={{ letterSpacing: '-0.02em' }}>
                  {title}
                </Typography>
                <Typography variant="body1" color="#94a3b8" sx={{ mt: 0.5, maxWidth: 640 }}>
                  {subtitle}
                </Typography>
              </Box>
              <Button variant="contained" sx={{ bgcolor: '#dc2626', color: '#fff', fontWeight: 700, px: 3, '&:hover': { bgcolor: '#b91c1c' } }}>
                + Run Report
              </Button>
            </Stack>

            <Grid container spacing={2.5}>
              {(stats || defaultStats).map((stat) => (
                <Grid item xs={12} sm={6} md={3} key={stat.label}>
                  <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', '&:hover': { borderColor: '#475569' } }}>
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                        <Box>
                          <Typography variant="caption" color="#94a3b8" sx={{ display: 'block', mb: 0.75 }}>
                            {stat.label}
                          </Typography>
                          <Typography variant="h4" fontWeight={800} color="#f8fafc" sx={{ letterSpacing: '-0.02em' }}>
                            {stat.value}
                          </Typography>
                        </Box>
                        <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: '#0f172a', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                          {stat.icon}
                        </Box>
                      </Stack>
                      <Typography variant="caption" color="#22c55e" sx={{ mt: 1.5, display: 'block', fontWeight: 600 }}>
                        ↑ {stat.trend}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {children}
          </Stack>
        </Container>

        <Box component="footer" sx={{ borderTop: '1px solid #1e293b', bgcolor: '#0f172a', py: 2.5, mt: 'auto' }}>
          <Container maxWidth="xl">
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={1.5}>
              <Stack direction="row" spacing={3}>
                <Button component={Link} href="/" variant="text" size="small" sx={{ color: '#64748b', px: 0, minWidth: 'auto', textTransform: 'none' }}>Privacy</Button>
                <Button component={Link} href="/" variant="text" size="small" sx={{ color: '#64748b', px: 0, minWidth: 'auto', textTransform: 'none' }}>Terms</Button>
                <Button component={Link} href="/" variant="text" size="small" sx={{ color: '#64748b', px: 0, minWidth: 'auto', textTransform: 'none' }}>Support</Button>
              </Stack>
              <Typography variant="caption" color="#475569">PlumbPro v2.4.1</Typography>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
