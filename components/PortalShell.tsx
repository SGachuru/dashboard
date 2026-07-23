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
  CircularProgress,
  Container,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme
} from '@mui/material'
import type { NextPage } from 'next'

interface MetricItem {
  label: string
  value: string
  trend: string
  trendUp?: boolean
  icon?: string
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
  tableRows?: Array<{ name: string; meta: string; status: string; amount?: string }>
  menuItems?: Array<{ label: string; href: string; icon: string }>
  guest?: boolean
}

const defaultStats: MetricItem[] = [
  { label: 'Jobs today', value: '18', trend: '+6%', trendUp: true, icon: '🔧' },
  { label: 'Revenue', value: '$9,841', trend: '+12%', trendUp: true, icon: '💰' },
  { label: 'Customers', value: '1,284', trend: '+3%', trendUp: true, icon: '👥' },
  { label: 'Open estimates', value: '31', trend: '-5%', trendUp: false, icon: '📋' },
]

const shellMenuItems = [
  { label: 'Dashboard', href: '/', icon: '📊' },
  { label: 'Jobs', href: '/', icon: '🔧' },
  { label: 'Schedule', href: '/', icon: '📅' },
  { label: 'Customers', href: '/', icon: '👥' },
  { label: 'Estimates', href: '/', icon: '📝' },
  { label: 'Invoices', href: '/', icon: '💳' },
  { label: 'Reports', href: '/', icon: '📈' },
  { label: 'Settings', href: '/', icon: '⚙️' },
]

const guestMenuItems = [
  { label: 'Home', href: '/', icon: '🏠' },
  { label: 'Features', href: '/', icon: '✨' },
  { label: 'For Customers', href: '/', icon: '👤' },
  { label: 'For Plumbers', href: '/', icon: '🔧' },
  { label: 'For Partners', href: '/', icon: '🤝' },
]

export default function PortalShell({
  title,
  subtitle,
  active = 'Dashboard',
  role = 'Guest',
  children,
  stats = defaultStats,
  chartData,
  tableRows,
  menuItems = shellMenuItems,
  guest,
}: PortalShellProps) {
  const theme = useTheme()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [session, setSession] = useState<{ name: string; role: string } | null>(null)
  const router = useRouter()
  const isGuest = typeof guest === 'boolean' ? guest : !session

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
        return { bg: '#22c55e18', color: '#22c55e', border: '#22c55e' }
      case 'in progress':
      case 'live':
      case 'running':
        return { bg: '#3b82f618', color: '#3b82f6', border: '#3b82f6' }
      case 'scheduled':
        return { bg: '#f59e0b18', color: '#f59e0b', border: '#f59e0b' }
      case 'pending':
        return { bg: '#94a3b818', color: '#94a3b8', border: '#94a3b8' }
      case 'action needed':
        return { bg: '#ef444418', color: '#ef4444', border: '#ef4444' }
      default:
        return { bg: '#94a3b818', color: '#94a3b8', border: '#94a3b8' }
    }
  }

  const sidebarWidth = isSidebarOpen ? 256 : 72
  const guestMenu = guestMenuItems.map(item => ({ ...item, href: item.href === '/features' ? '/' : item.href }))

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
          {isSidebarOpen && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '1rem', flexShrink: 0 }}>
                ST
              </Box>
              <Box sx={{ overflow: 'hidden' }}>
                <Typography variant="subtitle1" fontWeight={800} color="#f8fafc" sx={{ lineHeight: 1.1, whiteSpace: 'nowrap' }}>
                  Servio
                </Typography>
                <Typography variant="caption" color="#64748b" sx={{ display: 'block', whiteSpace: 'nowrap' }}>
                  Field Management
                </Typography>
              </Box>
            </Box>
          )}
          {!isSidebarOpen && (
            <Box sx={{ width: 36, height: 36, borderRadius: 2, bgcolor: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem' }}>
              ST
            </Box>
          )}
        </Box>

        <Stack spacing={0.5} sx={{ px: 1.5, mt: 0.5, flex: 1, overflowY: 'auto' }}>
          {(isGuest ? guestMenu : menuItems).map((item) => {
            const isActive = active === item.label
            return (
              <Box
                key={item.label}
                component={isGuest && item.href !== '/' ? Box : Link}
                href={isGuest && item.href !== '/' ? undefined : item.href}
                onClick={(e: React.MouseEvent) => {
                  if (isGuest && item.href !== '/' && item.href.startsWith('/')) {
                    e.preventDefault()
                    router.push('/customer-login')
                  }
                }}
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
                  borderLeft: isActive ? '3px solid #f59e0b' : '3px solid transparent',
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
                {isGuest ? (
                  <>
                    <Typography variant="caption" color="#94a3b8" sx={{ display: 'block', mb: 0.5 }}>
                      New here?
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={700} color="#f8fafc" sx={{ mb: 1 }}>
                      Create an account
                    </Typography>
                    <Button component={Link} href="/customer-login" size="small" variant="contained" sx={{ mb: 1, bgcolor: '#f59e0b', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#d97706' }, width: '100%' }}>
                      Get Started
                    </Button>
                    <Button component={Link} href="/customer-login" size="small" variant="outlined" sx={{ borderColor: '#334155', color: '#94a3b8', '&:hover': { borderColor: '#f59e0b', color: '#f8fafc' }, width: '100%' }}>
                      Sign In
                    </Button>
                  </>
                ) : (
                  <>
                    <Typography variant="caption" color="#94a3b8" sx={{ display: 'block', mb: 0.5 }}>
                      Workspace
                    </Typography>
                    <Typography variant="subtitle2" fontWeight={700} color="#f8fafc" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {session?.name || 'PlumbPro'}
                    </Typography>
                    <Typography variant="caption" color="#64748b" sx={{ display: 'block' }}>
                      {session?.role || role}
                    </Typography>
                    <Button size="small" variant="outlined" sx={{ mt: 1.5, width: '100%', borderColor: '#334155', color: '#94a3b8', '&:hover': { borderColor: '#64748b', color: '#f8fafc' } }} onClick={handleLogout}>
                      Sign out
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {isGuest ? (
                <>
                  <Button component={Link} href="/customer-login" size="small" variant="contained" sx={{ bgcolor: '#f59e0b', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#d97706' } }}>
                    Get Started
                  </Button>
                  <Button component={Link} href="/customer-login" size="small" variant="text" sx={{ color: '#94a3b8', '&:hover': { color: '#f8fafc' } }}>
                    Sign In
                  </Button>
                </>
              ) : (
                <Button size="small" variant="text" sx={{ color: '#64748b', minWidth: 'auto', p: 1, width: '100%', justifyContent: 'center' }} onClick={handleLogout}>
                  ⎋
                </Button>
              )}
            </Box>
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
              {isGuest ? (
                <Typography variant="body2" sx={{ color: '#64748b' }}>Overview mode</Typography>
              ) : (
                <InputBase placeholder="Search jobs, customers, estimates..." sx={{ color: '#f8fafc', width: '100%', '& .MuiInputBase-input::placeholder': { color: '#64748b', opacity: 1 } }} />
              )}
            </Box>
          </Box>

          <Stack direction="row" spacing={1} alignItems="center">
            {isGuest ? (
              <>
                <Button component={Link} href="/customer-login" size="small" variant="text" sx={{ color: '#f8fafc', fontWeight: 700, textTransform: 'none', display: { xs: 'none', sm: 'block' } }}>
                  Sign In
                </Button>
                <Button component={Link} href="/customer-login" variant="contained" size="small" sx={{ bgcolor: '#f59e0b', color: '#fff', fontWeight: 700, '&:hover': { bgcolor: '#d97706' }, display: { xs: 'none', sm: 'inline-flex' } }}>
                  Get Started
                </Button>
              </>
            ) : (
              <>
                <IconButton size="small" sx={{ color: '#94a3b8', bgcolor: '#1e293b', border: '1px solid #334155' }}>
                  <Badge badgeContent={3} color="error">
                    <Box component="span" sx={{ fontSize: '1.1rem' }}>🔔</Box>
                  </Badge>
                </IconButton>
                <Avatar sx={{ width: 36, height: 36, bgcolor: '#f59e0b', fontSize: '0.9rem', fontWeight: 700 }}>
                  {session?.name?.[0] || 'U'}
                </Avatar>
              </>
            )}
          </Stack>
        </Paper>

        <Container maxWidth="xl" sx={{ py: 4, flex: 1 }}>
          <Stack spacing={4}>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2}>
              <Box>
                {!isGuest && (
                  <Chip label={`${role} workspace`} size="small" sx={{ bgcolor: '#f59e0b18', color: '#f59e0b', fontWeight: 700, mb: 1.5 }} />
                )}
                <Typography variant="h3" fontWeight={800} color="#f8fafc" sx={{ letterSpacing: '-0.02em' }}>
                  {isGuest ? 'Welcome to Servio' : title}
                </Typography>
                <Typography variant="body1" color="#94a3b8" sx={{ mt: 0.5, maxWidth: 640 }}>
                  {isGuest ? 'Explore how the platform connects customers, plumbers, partners, and operations teams.' : subtitle}
                </Typography>
              </Box>
              {!isGuest && (
                <Button variant="contained" sx={{ bgcolor: '#f59e0b', color: '#fff', fontWeight: 700, px: 3, '&:hover': { bgcolor: '#d97706' } }}>
                  + New Job
                </Button>
              )}
            </Stack>

            {!isGuest && (
              <Grid container spacing={2.5}>
                {(stats || defaultStats).map((stat) => {
                  const sc = statusColor(stat.trendUp === false ? 'pending' : 'live')
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
                              vs last month
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  )
                })}
              </Grid>
            )}

            {children}

            {!isGuest && tableRows && tableRows.length > 0 && (
              <Card sx={{ borderRadius: 3, bgcolor: '#1e293b', border: '1px solid #334155', boxShadow: 'none', overflow: 'hidden' }}>
                <Box sx={{ p: 3, pb: 2, borderBottom: '1px solid #334155' }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Box sx={{ width: 4, height: 20, borderRadius: 2, bgcolor: '#f59e0b' }} />
                      <Typography variant="h6" fontWeight={700} color="#f8fafc">
                        Recent Activity
                      </Typography>
                    </Stack>
                    <Button size="small" variant="text" sx={{ color: '#f59e0b', fontWeight: 600, textTransform: 'none' }}>
                      View all
                    </Button>
                  </Stack>
                </Box>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#0f172a' }}>
                        <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155', py: 1.5 }}>
                          Job
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155', py: 1.5 }}>
                          Customer
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155', py: 1.5 }}>
                          Status
                        </TableCell>
                        <TableCell sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #334155', py: 1.5, textAlign: 'right' }}>
                          Amount
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tableRows.map((row, index) => {
                        const sc = statusColor(row.status)
                        return (
                          <TableRow key={row.name} sx={{ '&:hover': { bgcolor: '#33415520' }, transition: 'background 0.15s', cursor: 'pointer' }}>
                            <TableCell sx={{ color: '#f8fafc', fontWeight: 600, py: 2, borderBottom: '1px solid #1e293b' }}>{row.name}</TableCell>
                            <TableCell sx={{ color: '#94a3b8', py: 2, borderBottom: '1px solid #1e293b' }}>{row.meta}</TableCell>
                            <TableCell sx={{ py: 2, borderBottom: '1px solid #1e293b' }}>
                              <Chip
                                label={row.status}
                                size="small"
                                sx={{
                                  bgcolor: `${sc.color}18`,
                                  color: sc.color,
                                  fontWeight: 600,
                                  fontSize: '0.75rem',
                                  height: 24,
                                  border: `1px solid ${sc.color}40`,
                                  '& .MuiChip-label': { px: 1 },
                                }}
                              />
                            </TableCell>
                            <TableCell sx={{ color: '#f8fafc', fontWeight: 700, py: 2, borderBottom: '1px solid #1e293b', textAlign: 'right' }}>
                              {row.amount}
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            )}
          </Stack>
        </Container>

        {!isGuest && (
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
        )}
      </Box>
    </Box>
  )
}
