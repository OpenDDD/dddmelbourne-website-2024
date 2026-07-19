import React from 'react'
import { render, screen } from 'test/test-util'
import TicketPage from '../../pages/tickets'
import conference from 'config/conference'
import { TicketsProvider } from 'config/types'

jest.mock('next/router', () => ({
  useRouter: () => ({ pathname: '/tickets' }),
}))

describe('<TicketPage />', () => {
  const originalTicketsProviderEventId = conference.TicketsProviderEventId
  const originalTicketsProviderId = conference.TicketsProviderId

  afterEach(() => {
    conference.TicketsProviderEventId = originalTicketsProviderEventId
    conference.TicketsProviderId = originalTicketsProviderId
  })

  test('does not render the ticket provider widget without an event id', () => {
    conference.TicketsProviderEventId = ''
    conference.TicketsProviderId = TicketsProvider.Tito

    const { container } = render(<TicketPage />)

    expect(screen.getByText(/ticket details will be available soon/i)).toBeInTheDocument()
    expect(container.querySelector('tito-widget')).not.toBeInTheDocument()
  })

  test('renders the Tito widget when an event id is configured', () => {
    conference.TicketsProviderEventId = 'ddd-2027'
    conference.TicketsProviderId = TicketsProvider.Tito

    const { container } = render(<TicketPage />)

    expect(container.querySelector('tito-widget')).toHaveAttribute('event', 'ddd-melbourne/ddd-2027')
    expect(screen.queryByText(/ticket details will be available soon/i)).not.toBeInTheDocument()
  })
})
