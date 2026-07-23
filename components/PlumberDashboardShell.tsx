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

interface PlumberDashboardShellProps {
  title: string
  subtitle: string
  active: string
  children?: ReactNode
  stats?: MetricItem[]
  menuItems?: MenuItemData[]
}

const defaultStats: MetricItem[] = [
  { label: 'Jobs available', value: '8', trend: '+3 new', trendUp: true, icon: '🔧' },
  { label: 'Earnings', value: '$2,480', trend: '+12%', trendUp: true, icon: '💰' },
  { label: 'Rating', value: '4.9', trend: '+0.1', trendUp: true, icon: '⭐' },
  { label: 'Response time', value: '17 min', trend: '-2 min', trendUp: true, icon: '⏱️' },
]

const defaultMenuItems = [
  { label: 'Jobs', href: '/plumber-dashboard', icon: '🔧' },
  { label: 'Schedule', href: '/plumber-dashboard', icon: '📅' },
  { label: 'Customers', href: '/plumber-dashboard', icon: '👤' },
  { label: 'Estimates', href: '/plumber-dashboard', icon: '📝' },
  { label: 'Earnings', href: '/plumber-dashboard', icon: '💳' },
  { label: 'Reviews', href: '/plumber-dashboard', icon: '⭐' },
]

export default function PlumberDashboardShell({
  title,
  subtitle,
  active,
  children,
  stats = defaultStats,
  menuItems = defaultMenuItems,
}: PlumberDashboardShellProps) {
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

  const statusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return { bg: '#22c55e18', color: '#22c55e' }
      case 'in progress':
        return { bg: '#3b82f618', color: '#3b82f6' }
      case 'scheduled':
        return { bg: '#f59e0b18', color: '#f59e0b' }
      case 'new request':
        return { bg: '#ef444418', color: '#ef4444' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8' }
    }
  }

  const sidebarWidth = isSidebarOpen ? 256 : 72

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#0f172a' }}>
      <Paper
        elevation={0}
        sx={{
          width: sidebarWidth,
          minHeight: '100vh',
          bgcolor: '#020617',
          borderRight: '1px solid #1e293b',
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1100,
        }}
      >
        <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', justifyContent: isSidebarOpen ? 'space-between' : 'center', minHeight: 72 }}>
          {isSidebarOpen ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: '#238636', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0 }}>
                PP
              </Box>
              <Box sx={{ overflow: 'hidden' }}>
                <Typography variant="subtitle1" fontWeight={800} color="#f8fafc" sx={{ lineHeight: 1.1, whiteSpace: 'nowrap' }}>
                  PlumbPro
                </Typography>
                <Typography variant="caption" color="#64748b" sx={{ display: 'block', whiteSpace: 'nowrap' }}>
                  Pro workspace
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: '#238636', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.8rem' }}>
              PP
            </Box>
          )}
        </Box>

        <Stack spacing={0.5} sx={{ px: 1.5, mt: 0.5, flex: 1, overflowY: 'auto' }}>
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
                  px: isSidebarOpen ? 2 : 1.25,
                  py: 1.25,
                  borderRadius: 2,
                  textDecoration: 'none',
                  color: isActive ? '#f8fafc' : '#94a3b8',
                  bgcolor: isActive ? '#1e293b' : 'transparent',
                  borderLeft: isActive ? '3px solid #238636' : '3px solid transparent',
                  transition: 'all 0.15s ease',
                  '&:hover': {
                    bgcolor: isActive ? '#1e293b' : '#1e293b80',
                    color: '#f8fafc',
                  },
                }}
              >
                <Box component="span" sx={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, flexShrink: 0 }}>
                  {item.icon}
                </Box>
                {isSidebarOpen && (
                  <Typography variant="body2" fontWeight={isActive ? 700 : 400} sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.label}
                  </Typography>
                )}
              </Box>
            )
          })}
        </Stack>

        <Box sx={{ px: 1.5, pb: 2, pt: 1 }}>
          {isSidebarOpen ? (
            <Card sx={{ bgcolor: '#1e293b', border: '1px solid #334155', borderRadius: 2 }}>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="caption" color="#94a3b8" sx={{ display: 'block', mb: 0.5 }}>
                  Signed in as
                </Typography>
                <Typography variant="subtitle2" fontWeight={700} color="#f8fafc" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {session?.name || 'Plumber Profile'}
                </Typography>
                <Typography variant="caption" color="#64748b" sx={{ display: 'block' }}>
                  {session ? `${session.name} • Plumber` : 'Guest'}
                </Typography>
                <Button size="small" variant="outlined" sx={{ mt: 1.5, width: '100%', borderColor: '#334155', color: '#94a3b8', '&:hover': { borderColor: '#238636', color: '#f8fafc' } }} onClick={handleLogout}>
                  Sign out
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Button size="small" variant="text" sx={{ color: '#64748b', minWidth: 'auto', p: 1, width: '100%', justifyContent: 'center' }} onClick={handleLogout}>
              ⎋
            </Button>
          )}
        </Box>
      </Paper>

      <Box sx={{ flex: 1, ml: `${sidebarWidth}px`, transition: 'margin 0.25s cubic-bezier(0.4, 0, 0.2, 1)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
            backdropFilter: 'blur(8px)',
            bgcolor: 'rgba(15, 23, 42, 0.8)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
            <IconButton size="small" sx={{ color: '#94a3b8' }} onClick={() => setIsSidebarOpen((prev) => !prev)}>
              {isSidebarOpen ? '◂' : '▸'}
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, bgcolor: '#1e293b', borderRadius: 2, px: 2, py: 0.75, maxWidth: 420, flex: 1, border: '1px solid #334155' }}>
              <Box component="span" sx={{ color: '#64748b', fontSize: '1rem' }}>🔍</Box>
              <InputBase placeholder="Search jobs, customers..." sx={{ color: '#f8fafc', width: '100%', '& .MuiInputBase-input::placeholder': { color: '#64748b', opacity: 1 } }} />
            </Box>
          </Box>

          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton size="small" sx={{ color: '#94a3b8', bgcolor: '#1e293b', border: '1px solid #334155' }}>
              <Badge badgeContent={5} color="error">
                <Box component="span" sx={{ fontSize: '1.1rem' }}>🔔</Box>
              </Badge>
            </IconButton>
            <IconButton size="small" sx={{ color: '#94a3b8', bgcolor: '#1e293b', border: '1px solid #334155' }}>
              <Box component="span" sx={{ fontSize: '1.1rem' }}>💬</Box>
            </IconButton>
            <Avatar sx={{ width: 36, height: 36, bgcolor: '#238636', fontSize: '0.9rem', fontWeight: 700 }}>
              {session?.name?.[0] || 'U'}
            </Avatar>
          </Stack>
        </Paper>

        <Container maxWidth="xl" sx={{ py: 4, flex: 1 }}>
          <Stack spacing={4}>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2}>
              <Box>
                <Chip label="Plumber" size="small" sx={{ bgcolor: '#23863618', color: '#238636', fontWeight: 700, mb: 1.5 }} />
                <Typography variant="h3" fontWeight={800} color="#f8fafc" sx={{ letterSpacing: '-0.02em' }}>
                  {title}
                </Typography>
                <Typography variant="body1" color="#94a3b8" sx={{ mt: 0.5, maxWidth: 640 }}>
                  {subtitle}
                </Typography>
              </Box>
              <Button variant="contained" sx={{ bgcolor: '#238636', color: '#fff', fontWeight: 700, px: 3, '&:hover': { bgcolor: '#2ea043' } }}>
                Update Availability
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Button size="small" variant="contained" sx={{ bgcolor: '#238636', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#2ea043' } }}>
                All Jobs
              </Button>
              <Button size="small" variant="outlined" sx={{ borderColor: '#334155', color: '#94a3b8', '&:hover': { borderColor: '#64748b', color: '#f8fafc' } }}>
                Scheduled
              </Button>
              <Button size="small" variant="outlined" sx={{ borderColor: '#334155', color: '#94a3b8', '&:hover': { borderColor: '#64748b', color: '#f8fafc' } }}>
                Completed
              </Button>
              <Button size="small" variant="outlined" sx={{ borderColor: '#334155', color: '#94a3b8', '&:hover': { borderColor: '#64748b', color: '#f8fafc' } }}>
                Cancelled
              </Button>
            </Stack>

            <Grid container spacing={2.5}>
              {(stats || defaultStats).map((stat) => {
                const sc = statusColor(stat.trendUp !== false ? 'in progress' : 'pending')
                return (
                  <Grid item xs={12} sm={6} md={3} key={stat.label}>
                    <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', transition: 'all 0.2s ease', '&:hover': { borderColor: '#475569', transform: 'translateY(-2px)' } }}>
                      <CardContent>
                        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1.5 }}>
                          <Box>
                            <Typography variant="caption" color="#94a3b8" sx={{ display: 'block', mb: 0.75, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                              {stat.label}
                            </Typography>
                            <Typography variant="h4" fontWeight={800} color="#f8fafc" sx={{ letterSpacing: '-0.02em' }}>
                              {stat.value}
                            </Typography>
                          </Box>
                          <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: '#0f172a', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                            {stat.icon}
                          </Box>
                        </Stack>
                        <Stack direction="row" spacing={0.75} alignItems="center">
                          <Chip
                            label={stat.trend}
                            size="small"
                            sx={{
                              bgcolor: `${sc.color}18`,
                              color: sc.color,
                              fontWeight: 700,
                              fontSize: '0.75rem',
                              height: 22,
                              '& .MuiChip-label': { px: 1 },
                            }}
                          />
                          <Typography variant="caption" color="#64748b" fontWeight={500}>
                            vs last week
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })}
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
