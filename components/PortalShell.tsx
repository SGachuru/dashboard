import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

interface PortalShellProps {
  title: string
  subtitle: string
  active: string
  children: ReactNode
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Login', href: '/customer-login' },
  { label: 'Request Service', href: '/request-service' },
  { label: 'Find Plumbers', href: '/find-plumbers' },
  { label: 'Customer Dashboard', href: '/customer-dashboard' },
  { label: 'Plumber Dashboard', href: '/plumber-dashboard' },
  { label: 'Partner Portal', href: '/partner-portal' },
  { label: 'Service Manager', href: '/service-manager-dashboard' },
  { label: 'Admin', href: '/admin-dashboard' },
]

export default function PortalShell({ title, subtitle, active, children }: PortalShellProps) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f7fb', color: '#0f172a' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 3, md: 4 } }}>
        <Paper sx={{ p: { xs: 2, md: 2.5 }, borderRadius: 4, mb: 3, boxShadow: '0 12px 30px rgba(15,23,42,0.08)' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2}>
            <Box>
              <Typography variant="h5" fontWeight={800}>PlumbPro Portal</Typography>
              <Typography variant="body2" color="text.secondary">A connected platform for customers, plumbers, partners, and operators.</Typography>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} flexWrap="wrap">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  variant={active === item.label ? 'contained' : 'text'}
                  color={active === item.label ? 'primary' : 'inherit'}
                  size="small"
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Paper>

        <Paper sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 4, mb: 3, boxShadow: '0 16px 35px rgba(15,23,42,0.08)' }}>
          <Typography variant="overline" color="primary" fontWeight={700}>Digital operations hub</Typography>
          <Typography variant="h3" fontWeight={800}>{title}</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
            {subtitle}
          </Typography>
        </Paper>

        {children}
      </Container>
    </Box>
  )
}
