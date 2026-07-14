import { Typography, Container, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material'
import type { NextPage } from 'next'

interface Feature {
  id: string
  feature: string
  description: string
}

interface Section {
  id: string
  title: string
  features: Feature[]
}

const sections: Section[] = [
  {
    id: 'Service Manager Dashboard',
    title: 'Service Manager Dashboard (Web)',
    features: [
      { id: 'M-001', feature: 'Multi-Plumber Account', description: 'Register company, add plumbers under the account, manage subscriptions centrally.' },
      { id: 'M-002', feature: 'Real-Time Map', description: 'View all active plumbers, their status, and current job locations.' },
      { id: 'M-003', feature: 'Dispatch & Assign', description: 'Assign jobs to specific plumbers or enable auto-assignment.' },
      { id: 'M-004', feature: 'Job Monitoring', description: 'Track all jobs, statuses, and customer communications.' },
      { id: 'M-005', feature: 'Customer Management', description: 'View customer history, disputes, and feedback.' },
      { id: 'M-006', feature: 'Reporting', description: 'Reports on job volume, completion rates, response times, and plumber performance.' },
      { id: 'M-007', feature: 'Subscription & Billing', description: 'Manage company-level subscription and payments.' },
    ]
  },
  {
    id: 'Partner Portal',
    title: 'Partner Portal (Web)',
    features: [
      { id: 'PR-001', feature: 'Partner Registration', description: 'Suppliers, financiers, trainers register and get approved by admin.' },
      { id: 'PR-002', feature: 'Ad Campaign Management', description: 'Create ad listings: product name, image, price, description, call/delivery action.' },
      { id: 'PR-003', feature: 'Targeting', description: 'Target ads by location, service type, customer segment, or plumber segment.' },
      { id: 'PR-004', feature: 'Lead Analytics', description: 'View call clicks, delivery requests, ad impressions, and engagement.' },
      { id: 'PR-005', feature: 'Content Publishing', description: 'Upload training videos, guides, or financing products.' },
      { id: 'PR-006', feature: 'Billing', description: 'Pay for ad placements or campaigns.' },
    ]
  },
  {
    id: 'Admin Dashboard',
    title: 'Admin Dashboard (Web)',
    features: [
      { id: 'A-001', feature: 'User Management', description: 'Approve, suspend, or ban customers, plumbers, managers, and partners.' },
      { id: 'A-002', feature: 'KYC Verification', description: 'Review and approve plumber ID, certificates, and business registration.' },
      { id: 'A-003', feature: 'Subscription Oversight', description: 'View all active/expired subscriptions, revenue, and reminders.' },
      { id: 'A-004', feature: 'Dispute Resolution', description: 'Review complaints, communicate with parties, issue warnings or refunds.' },
      { id: 'A-005', feature: 'Ad Moderation', description: 'Approve partner ads, manage placement, pricing, and visibility.' },
      { id: 'A-006', feature: 'Content Management', description: 'Manage training content, FAQs, and app copy.' },
      { id: 'A-007', feature: 'Analytics', description: 'Platform-wide KPIs: bookings, revenue, retention, churn, response time.' },
      { id: 'A-008', feature: 'Communications', description: 'Send push notifications, SMS, and email campaigns.' },
      { id: 'A-009', feature: 'Reporting', description: 'Generate detailed reports on user activity, ad performance, and platform health.' },
    ]
  }
]

const DashboardPage: NextPage = () => {
  const getColor = (id: string) => {
    if (id.startsWith('M')) return 'primary'
    if (id.startsWith('PR')) return 'secondary'
    return 'success'
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
        Platform Dashboard Features
      </Typography>
      
      {sections.map((section) => (
        <Box key={section.id} sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
            {section.title}
          </Typography>
          
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>ID</strong></TableCell>
                  <TableCell><strong>Feature</strong></TableCell>
                  <TableCell><strong>Description</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {section.features.map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell>
                      <Chip label={row.id} color={getColor(row.id)} size="small" />
                    </TableCell>
                    <TableCell><strong>{row.feature}</strong></TableCell>
                    <TableCell>{row.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Container>
  )
}

export default DashboardPage