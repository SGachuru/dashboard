import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

export default function PortalShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children?: ReactNode
}) {
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