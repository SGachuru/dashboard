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
  Grid,
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

interface CustomerDashboardShellProps {
  title: string
  subtitle: string
  active: string
  children?: ReactNode
  stats?: MetricItem[]
  menuItems?: MenuItemData[]
}

const defaultStats: MetricItem[] = [
  { label: 'Bookings', value: '12', trend: '+3 upcoming', trendUp: true, icon: '📋' },
  { label: 'Saved plans', value: '4', trend: '+1 added', trendUp: true, icon: '💾' },
  { label: 'Services used', value: '7', trend: '+2 this month', trendUp: true, icon: '🔧' },
  { label: 'Support cases', value: '2', trend: '1 open', trendUp: false, icon: '🎫' },
]

const defaultMenuItems = [
  { label: 'Overview', href: '/customer-dashboard', icon: '📊' },
  { label: 'Bookings', href: '/customer-dashboard', icon: '📋' },
  { label: 'Messages', href: '/customer-dashboard', icon: '💬' },
  { label: 'Profile', href: '/customer-dashboard', icon: '👤' },
]

export default function CustomerDashboardShell({
  title,
  subtitle,
  active,
  children,
  stats = defaultStats,
  menuItems = defaultMenuItems,
}: CustomerDashboardShellProps) {
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
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f8fafc' }}>
      <Paper
        elevation={0}
        sx={{
          width: isSidebarOpen ? 260 : 72,
          minHeight: '100vh',
          bgcolor: '#ffffff',
          borderRight: '1px solid #e2e8f0',
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
              <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: '#0891b2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.8rem' }}>
                PP
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={800} color="#0f172a" sx={{ lineHeight: 1.1 }}>
                  PlumbPro
                </Typography>
                <Typography variant="caption" color="#64748b" sx={{ display: 'block' }}>
                  Customer portal
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: '#0891b2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.8rem' }}>
              PP
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
                  color: isActive ? '#0891b2' : '#64748b',
                  bgcolor: isActive ? '#ecfeff' : 'transparent',
                  borderLeft: isActive ? '3px solid #0891b2' : '3px solid transparent',
                  transition: 'all 0.15s ease',
                  '&:hover': {
                    bgcolor: isActive ? '#ecfeff' : '#f1f5f9',
                    color: '#0891b2',
                  },
                }}
              >
                <Box component="span" sx={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24 }}>
                  {item.icon}
                </Box>
                {isSidebarOpen && (
                  <Typography variant="body2" fontWeight={isActive ? 700 : 500} sx={{ whiteSpace: 'nowrap' }}>
                    {item.label}
                  </Typography>
                )}
              </Box>
            )
          })}
        </Stack>

        <Box sx={{ mt: 'auto', px: 1.5, pb: 2 }}>
          {isSidebarOpen ? (
            <Card sx={{ bgcolor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 2 }}>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="caption" color="#64748b" sx={{ display: 'block', mb: 0.5 }}>
                  Signed in as
                </Typography>
                <Typography variant="subtitle2" fontWeight={700} color="#0f172a">
                  {session?.name || 'Customer'}
                </Typography>
                <Typography variant="caption" color="#94a3b8" sx={{ display: 'block' }}>
                  {session?.role || 'Customer'}
                </Typography>
                <Button size="small" variant="outlined" sx={{ mt: 1.5, width: '100%', borderColor: '#e2e8f0', color: '#64748b', '&:hover': { borderColor: '#0891b2', color: '#0891b2' } }} onClick={handleLogout}>
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

      <Box sx={{ flex: 1, ml: `${isSidebarOpen ? 260 : 72}px`, transition: 'margin 0.2s ease', minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#f8fafc' }}>
        <Paper
          elevation={0}
          sx={{
            px: 3,
            py: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #e2e8f0',
            bgcolor: '#ffffff',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
            <IconButton size="small" sx={{ color: '#64748b' }} onClick={() => setIsSidebarOpen((prev) => !prev)}>
              {isSidebarOpen ? '◂' : '▸'}
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, bgcolor: '#f1f5f9', borderRadius: 2, px: 2, py: 0.75, maxWidth: 420, flex: 1 }}>
              <Box component="span" sx={{ color: '#94a3b8', fontSize: '1rem' }}>🔍</Box>
              <InputBase placeholder="Search bookings, requests..." sx={{ color: '#0f172a', width: '100%', '& .MuiInputBase-input::placeholder': { color: '#94a3b8', opacity: 1 } }} />
            </Box>
          </Box>

          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton size="small" sx={{ color: '#64748b', bgcolor: '#f1f5f9' }}>
              <Badge badgeContent={2} color="error">
                <Box component="span" sx={{ fontSize: '1.1rem' }}>🔔</Box>
              </Badge>
            </IconButton>
            <Avatar sx={{ width: 36, height: 36, bgcolor: '#0891b2', fontSize: '0.9rem', fontWeight: 700 }}>
              {session?.name?.[0] || 'U'}
            </Avatar>
          </Stack>
        </Paper>

        <Container maxWidth="xl" sx={{ py: 4, flex: 1 }}>
          <Stack spacing={4}>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2}>
              <Box>
                <Chip label="Customer" size="small" sx={{ bgcolor: '#0891b218', color: '#0891b2', fontWeight: 700, mb: 1.5 }} />
                <Typography variant="h3" fontWeight={800} color="#0f172a" sx={{ letterSpacing: '-0.02em' }}>
                  {title}
                </Typography>
                <Typography variant="body1" color="#64748b" sx={{ mt: 0.5, maxWidth: 640 }}>
                  {subtitle}
                </Typography>
              </Box>
              <Button component={Link} href="/request-service" variant="contained" sx={{ bgcolor: '#0891b2', color: '#fff', fontWeight: 700, px: 3, '&:hover': { bgcolor: '#0e7490' } }}>
                + New Request
              </Button>
            </Stack>

            <Grid container spacing={2.5}>
              {(stats || defaultStats).map((stat) => (
                <Grid item xs={12} sm={6} md={3} key={stat.label}>
                  <Card sx={{ borderRadius: 3, bgcolor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', '&:hover': { borderColor: '#0891b2' } }}>
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                        <Box>
                          <Typography variant="caption" color="#64748b" sx={{ display: 'block', mb: 0.75 }}>
                            {stat.label}
                          </Typography>
                          <Typography variant="h4" fontWeight={800} color="#0f172a" sx={{ letterSpacing: '-0.02em' }}>
                            {stat.value}
                          </Typography>
                        </Box>
                        <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                          {stat.icon}
                        </Box>
                      </Stack>
                      <Typography variant="caption" color={stat.trendUp ? '#059669' : '#d97706'} sx={{ mt: 1.5, display: 'block', fontWeight: 600 }}>
                        {stat.trendUp ? '↑' : '→'} {stat.trend}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {children}
          </Stack>
        </Container>

        <Box component="footer" sx={{ borderTop: '1px solid #e2e8f0', bgcolor: '#ffffff', py: 2.5, mt: 'auto' }}>
          <Container maxWidth="xl">
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={1.5}>
              <Stack direction="row" spacing={3}>
                <Button component={Link} href="/" variant="text" size="small" sx={{ color: '#94a3b8', px: 0, minWidth: 'auto', textTransform: 'none' }}>Privacy</Button>
                <Button component={Link} href="/" variant="text" size="small" sx={{ color: '#94a3b8', px: 0, minWidth: 'auto', textTransform: 'none' }}>Terms</Button>
                <Button component={Link} href="/" variant="text" size="small" sx={{ color: '#94a3b8', px: 0, minWidth: 'auto', textTransform: 'none' }}>Support</Button>
              </Stack>
              <Typography variant="caption" color="#94a3b8">PlumbPro v2.4.1</Typography>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
