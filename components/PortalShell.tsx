import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
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

interface TableRow {
  name: string
  meta: string
  status: string
}

interface ListItemData {
  title: string
  detail: string
}

interface PortalShellProps {
  title: string
  subtitle: string
  active: string
  role?: string
  children?: ReactNode
  stats?: MetricItem[]
  tableRows?: TableRow[]
  alerts?: ListItemData[]
  activities?: ListItemData[]
  calendarItems?: ListItemData[]
  mapLocations?: Array<{ name: string; status: string }>
  menuItems?: Array<{ label: string; href: string; icon: string }>
}

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

const defaultStats = [
  { label: 'Total jobs', value: '248', trend: '+12%' },
  { label: 'Revenue', value: '$18.4k', trend: '+8%' },
  { label: 'Active users', value: '1,284', trend: '+6%' },
  { label: 'Open tickets', value: '31', trend: '-3%' },
]

const defaultTableRows = [
  { name: 'Leak repair', meta: 'North District • Today', status: 'In progress' },
  { name: 'Water heater install', meta: 'West Loop • Tomorrow', status: 'Scheduled' },
  { name: 'Emergency drain clear', meta: 'Central • 2h ago', status: 'Urgent' },
]

const defaultAlerts = [
  { title: 'Dispatch delay', detail: '2 jobs are waiting on technician assignment.' },
  { title: 'Maintenance window', detail: 'Platform maintenance begins at 10:00 PM UTC.' },
]

const defaultActivities = [
  { title: 'New review received', detail: 'A customer left a 5-star review for the latest visit.' },
  { title: 'Payment approved', detail: 'Subscription renewal was approved for the partner tier.' },
]

const defaultCalendarItems = [
  { title: 'Campaign kickoff', detail: '09:30 • Marketing team sync' },
  { title: 'Service review', detail: '14:00 • Regional operations review' },
]

const defaultMapLocations = [
  { name: 'Downtown Hub', status: 'Live' },
  { name: 'West Loop', status: 'Busy' },
  { name: 'North District', status: 'On route' },
]

export default function PortalShell({
  title,
  subtitle,
  active,
  role = 'Operations',
  children,
  stats = defaultStats,
  tableRows = defaultTableRows,
  alerts = defaultAlerts,
  activities = defaultActivities,
  calendarItems = defaultCalendarItems,
  mapLocations = defaultMapLocations,
  menuItems = defaultMenuItems,
}: PortalShellProps) {
  const router = useRouter()
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [session, setSession] = useState<{ name: string; role: string } | null>(null)
  const performanceBars = [42, 68, 54, 79, 74]

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
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f7fb', color: '#0f172a' }}>
      <Paper sx={{ borderRadius: 0, boxShadow: '0 8px 30px rgba(15,23,42,0.08)', position: 'sticky', top: 0, zIndex: 2 }}>
        <Container maxWidth="xl">
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2} sx={{ py: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ width: 44, height: 44, borderRadius: 2.5, bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800 }}>
                PP
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={800}>PlumbPro Portal</Typography>
                <Typography variant="body2" color="text.secondary">Unified operations workspace</Typography>
              </Box>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ width: { xs: '100%', md: 'auto' }, alignItems: { xs: 'flex-start', sm: 'center' } }}>
              <TextField size="small" placeholder="Search workspace" sx={{ minWidth: { xs: '100%', sm: 220 } }} />
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" size="small">🔔 3</Button>
                <Button variant="outlined" size="small">💬 5</Button>
                <Button variant="contained" size="small" onClick={handleLogout}>
                  {session ? 'Logout' : 'Login'}
                </Button>
              </Stack>
              <Typography variant="caption" color="text.secondary">
                {currentUserLabel}
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Paper>

      <Container maxWidth="xl" sx={{ py: { xs: 3, md: 4 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={2.5}>
            <Paper sx={{ p: 2.5, borderRadius: 4, height: '100%', transition: 'all 0.2s ease' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
                <Box>
                  <Typography variant="overline" color="primary" fontWeight={700}>Role workspace</Typography>
                  <Typography variant="h5" fontWeight={800}>{isSidebarCollapsed ? 'Role' : role}</Typography>
                </Box>
                <Button variant="outlined" size="small" onClick={() => setIsSidebarCollapsed((prev) => !prev)}>
                  {isSidebarCollapsed ? '›' : '‹'}
                </Button>
              </Stack>

              {!isSidebarCollapsed ? (
                <>
                  <Stack spacing={1} sx={{ mt: 2 }}>
                    {menuItems.map((item, index) => (
                      <Button
                        key={`${item.href}-${index}`}
                        component={Link}
                        href={item.href}
                        variant={active === item.label ? 'contained' : 'text'}
                        color={active === item.label ? 'primary' : 'inherit'}
                        size="small"
                        fullWidth
                        sx={{ justifyContent: 'flex-start', borderRadius: 2, px: 1.5, py: 1 }}
                      >
                        <Box component="span" sx={{ mr: 1 }}>{item.icon}</Box>
                        {item.label}
                      </Button>
                    ))}
                  </Stack>
                  <Divider sx={{ my: 2.5 }} />
                  <Box sx={{ p: 1.5, borderRadius: 3, bgcolor: '#eef2ff' }}>
                    <Typography variant="caption" color="text.secondary">Current focus</Typography>
                    <Typography variant="body2" fontWeight={700}>{title}</Typography>
                  </Box>
                </>
              ) : (
                <Stack spacing={1} sx={{ mt: 2 }}>
                  {menuItems.map((item, index) => (
                    <Button
                      key={`${item.href}-${index}`}
                      component={Link}
                      href={item.href}
                      variant={active === item.label ? 'contained' : 'text'}
                      color={active === item.label ? 'primary' : 'inherit'}
                      size="small"
                      sx={{ minWidth: 0, justifyContent: 'center', borderRadius: 2, px: 1.2, py: 1 }}
                    >
                      <Box component="span">{item.icon}</Box>
                    </Button>
                  ))}
                </Stack>
              )}
            </Paper>
          </Grid>

          <Grid item xs={12} lg={9.5}>
            <Stack spacing={3}>
              <Paper sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 4 }}>
                <Typography variant="overline" color="primary" fontWeight={700}>Digital operations hub</Typography>
                <Typography variant="h3" fontWeight={800}>{title}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
                  {subtitle}
                </Typography>
              </Paper>

              <Grid container spacing={2}>
                {stats.map((stat) => (
                  <Grid item xs={12} sm={6} lg={3} key={stat.label}>
                    <Card sx={{ borderRadius: 3, height: '100%' }}>
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
                        <Typography variant="h5" fontWeight={800} sx={{ mt: 0.5 }}>{stat.value}</Typography>
                        <Chip label={stat.trend} color="success" size="small" sx={{ mt: 1 }} />
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={12} xl={7}>
                  <Card sx={{ borderRadius: 4, height: '100%' }}>
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                        <Typography variant="h6" fontWeight={700}>Operational overview</Typography>
                        <Chip label="Live" color="primary" size="small" />
                      </Stack>
                      <List disablePadding>
                        {tableRows.map((row) => (
                          <ListItem key={row.name} disablePadding sx={{ py: 1.25 }}>
                            <ListItemText primary={row.name} secondary={row.meta} />
                            <Chip label={row.status} size="small" color={row.status === 'Urgent' ? 'error' : 'default'} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} xl={5}>
                  <Stack spacing={3}>
                    <Card sx={{ borderRadius: 4 }}>
                      <CardContent>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                          <Typography variant="h6" fontWeight={700}>Live location map</Typography>
                          <Chip label="Tracking" color="secondary" size="small" />
                        </Stack>
                        <Box sx={{ borderRadius: 3, minHeight: 180, p: 2, bgcolor: 'linear-gradient(135deg, #e0f2fe, #eff6ff)', border: '1px solid #bfdbfe' }}>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Live plumber activity in the service area</Typography>
                          <Box sx={{ position: 'relative', height: 120, borderRadius: 3, bgcolor: '#dbeafe', overflow: 'hidden' }}>
                            {mapLocations.map((location, index) => (
                              <Box
                                key={location.name}
                                sx={{
                                  position: 'absolute',
                                  left: `${20 + index * 24}%`,
                                  top: `${30 + (index % 2) * 20}%`,
                                  width: 16,
                                  height: 16,
                                  borderRadius: '50%',
                                  bgcolor: index === 0 ? '#2563eb' : '#0f766e',
                                  boxShadow: '0 0 0 6px rgba(255,255,255,0.7)',
                                }}
                              />
                            ))}
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>

                    <Card sx={{ borderRadius: 4 }}>
                      <CardContent>
                        <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Upcoming schedule</Typography>
                        <Stack spacing={1.2}>
                          {calendarItems.map((item) => (
                            <Box key={item.title} sx={{ p: 1.25, borderRadius: 2, bgcolor: '#f8fafc' }}>
                              <Typography variant="body2" fontWeight={700}>{item.title}</Typography>
                              <Typography variant="caption" color="text.secondary">{item.detail}</Typography>
                            </Box>
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Stack>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ borderRadius: 4, height: '100%' }}>
                    <CardContent>
                      <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Notification center</Typography>
                      <Stack spacing={1.25}>
                        {alerts.map((alert) => (
                          <Box key={alert.title} sx={{ p: 1.25, borderRadius: 2, bgcolor: '#fef2f2' }}>
                            <Typography variant="body2" fontWeight={700}>{alert.title}</Typography>
                            <Typography variant="caption" color="text.secondary">{alert.detail}</Typography>
                          </Box>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card sx={{ borderRadius: 4, height: '100%' }}>
                    <CardContent>
                      <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Activity feed</Typography>
                      <Stack spacing={1.25}>
                        {activities.map((activity) => (
                          <Box key={activity.title} sx={{ p: 1.25, borderRadius: 2, bgcolor: '#f8fafc' }}>
                            <Typography variant="body2" fontWeight={700}>{activity.title}</Typography>
                            <Typography variant="caption" color="text.secondary">{activity.detail}</Typography>
                          </Box>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Card sx={{ borderRadius: 4 }}>
                <CardContent>
                  <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2} sx={{ mb: 2 }}>
                    <Box>
                      <Typography variant="h6" fontWeight={700}>Performance chart</Typography>
                      <Typography variant="body2" color="text.secondary">Weekly trend across bookings and engagement</Typography>
                    </Box>
                    <Chip label="Updated 5m ago" color="success" size="small" />
                  </Stack>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="flex-end">
                    {performanceBars.map((value, index) => (
                      <Box key={`${index}-${value}`} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', height: 140, borderRadius: 2, bgcolor: '#eef2ff', display: 'flex', alignItems: 'flex-end', p: 1 }}>
                          <Box sx={{ width: '100%', height: `${value}%`, borderRadius: 1.5, bgcolor: index % 2 === 0 ? 'primary.main' : 'secondary.main' }} />
                        </Box>
                        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][index]}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {children ? (
                <Paper sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 4 }}>
                  {children}
                </Paper>
              ) : null}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
