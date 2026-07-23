import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PortalShell from '../components/PortalShell'

const roles = [
  { label: 'Customer', value: 'Customer' },
  { label: 'Plumber', value: 'Plumber' },
  { label: 'Partner', value: 'Partner' },
  { label: 'Service Manager', value: 'Service Manager' },
  { label: 'Admin', value: 'Admin' },
]

const roleToPath: Record<string, string> = {
  Customer: '/customer-dashboard',
  Plumber: '/plumber-dashboard',
  Partner: '/partner-portal',
  'Service Manager': '/service-manager-dashboard',
  Admin: '/admin-dashboard',
}

const CustomerLoginPage: NextPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({ name: '', phone: '', role: 'Customer' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const storedSession = window.localStorage.getItem('plumbpro-session')
    if (storedSession) {
      try {
        const parsedSession = JSON.parse(storedSession) as { role?: string }
        if (parsedSession.role) {
          const destination = roleToPath[parsedSession.role] || '/customer-dashboard'
          router.replace(destination)
        }
      } catch {
        window.localStorage.removeItem('plumbpro-session')
      }
    }
  }, [router])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFeedback(null)

    try {
      const response = await fetch('http://85.217.171.56:4000/api/auth/simple-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Phone: formData.phone,
          Role: formData.role,
        }),
      })

      const text = await response.text()
      let payload: any = null
      try {
        payload = text ? JSON.parse(text) : null
      } catch {
        payload = null
      }

      if (!response.ok) {
        const fallbackMessage = `Sign-in request returned ${response.status}. Continuing locally with your selected role.`
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('plumbpro-session', JSON.stringify({ name: formData.name, role: formData.role }))
        }
        setFeedback({ type: 'success', message: payload?.message || fallbackMessage })
        window.setTimeout(() => {
          router.push(roleToPath[formData.role] || '/customer-dashboard')
        }, 600)
        return
      }

      const successMessage = payload?.message || `Welcome ${formData.name}. You are now signed in.`
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('plumbpro-session', JSON.stringify({ name: formData.name, role: formData.role }))
      }
      setFeedback({ type: 'success', message: successMessage })
      window.setTimeout(() => {
        router.push(roleToPath[formData.role] || '/customer-dashboard')
      }, 600)
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error instanceof Error ? error.message : 'Unable to complete sign in right now.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PortalShell
      title="Customer Registration / Login"
      subtitle="Sign in with your name, phone number, and role to move into the matching operations workspace."
      guest={false}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4, bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={700} color="#f0f6fc" sx={{ mb: 2 }}>Sign in or register</Typography>
              <Typography variant="body2" color="#8b949e" sx={{ mb: 3 }}>Use your details and select the workspace you need access to.</Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField
                    label="Name"
                    fullWidth
                    required
                    value={formData.name}
                    onChange={(event) => setFormData((previous) => ({ ...previous, name: event.target.value }))}
                    sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#0d1117', color: '#f0f6fc', borderColor: '#30363d' } }}
                  />
                  <TextField
                    label="Phone"
                    fullWidth
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => setFormData((previous) => ({ ...previous, phone: event.target.value }))}
                    sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#0d1117', color: '#f0f6fc', borderColor: '#30363d' } }}
                  />
                  <FormControl fullWidth>
                    <InputLabel id="role-select-label" sx={{ color: '#8b949e' }}>Role</InputLabel>
                    <Select
                      labelId="role-select-label"
                      label="Role"
                      value={formData.role}
                      onChange={(event) => setFormData((previous) => ({ ...previous, role: event.target.value }))}
                      sx={{ bgcolor: '#0d1117', color: '#f0f6fc', '& .MuiOutlinedInput-notchedOutline': { borderColor: '#30363d' } }}
                    >
                      {roles.map((role) => (
                        <MenuItem key={role.value} value={role.value} sx={{ bgcolor: '#161b22', color: '#f0f6fc' }}>
                          {role.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {feedback ? (
                    <Alert severity={feedback.type} sx={{ bgcolor: feedback.type === 'success' ? '#1f2d1f' : '#2d1518', color: '#f0f6fc', border: '1px solid #30363d' }}>{feedback.message}</Alert>
                  ) : null}
                  <Button type="submit" variant="contained" size="large" disabled={isSubmitting} sx={{ bgcolor: '#238636', '&:hover': { bgcolor: '#2ea043' } }}>
                    {isSubmitting ? 'Signing in…' : 'Continue'}
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4, height: '100%', bgcolor: '#161b22', border: '1px solid #30363d', boxShadow: 'none' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={700} color="#f0f6fc" sx={{ mb: 2 }}>Why customers choose it</Typography>
              <Box component="ul" sx={{ pl: 2.5, color: '#8b949e', lineHeight: 1.7 }}>
                <li>Fast sign-in with your role in mind</li>
                <li>Immediate access to the matching dashboard</li>
                <li>Live updates, scheduling, and notifications</li>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PortalShell>
  )
}

export default CustomerLoginPage
