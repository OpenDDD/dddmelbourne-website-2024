import React, { Fragment } from 'react'
import { SafeLink } from 'components/global/safeLink'
import Conference from './conference'
import conference from './conference'
import { Dates, FAQ, TicketPurchasingOptions } from './types'
import { format } from 'date-fns'

export default function getFaqs(dates: Dates): FAQ[] {
  const Faqs: FAQ[] = []

  if (!Conference.HideDate) {
    Faqs.push({
      Question: 'When and where is it?',
      Answer: `The event ${dates.IsComplete ? 'was' : 'will be'} held on ${dates.Display}${
        Conference.HideVenue ? '' : ' at ' + Conference.Venue.Name
      }.
          Doors ${dates.IsComplete ? 'opened' : 'will open'} at ${Conference.DoorsOpenTime} and ${
        dates.IsComplete ? 'we finished' : "we'll finish"
      } at ${Conference.FinishTime}${
        Conference.HasAfterParty
          ? ' followed by the afterparty' + Conference.HideAfterpartyVenue
            ? ''
            : ' at ' + Conference.Venue.Afterparty
          : ''
      }.`,
    })
  }
  if (Conference.TicketPurchasingOptions !== TicketPurchasingOptions.NotOnSale) {
    Faqs.push({
      Question: 'How much does it cost to attend?',
      Answer: `${Conference.TicketPrice} covers your entry, food and coffee all day and access to the afterparty! Amazing value right!?
        We are able to keep the ticket price so low thanks to our generous sponsors.
        ${Conference.Name} is a non profit event and any excess will be kept as part of a fund for future events and/or donated to charity.`,
      Category: 'tickets',
    })
  }

  Faqs.push({
    Question: "What if I can't afford to attend? [Financial Assistance]",
    AnswerWithoutParagraph: (
      <div>
        <p>
          We’re dedicated to diversity, inclusion and even more so—equal opportunity. We realise that buying a ticket to
          a conference for many isn’t a trivial expense, but it can be a turning point in someone’s career.
        </p>
        <p>
          We're committed to bringing in as many individuals who couldn’t attend otherwise as possible. Please, email us
          at{' '}
          <a className="maillink" href={'mailto:' + Conference.ContactEmail}>
            {Conference.ContactEmail}
          </a>{' '}
          and we can work with you to figure out the best way to assist.
        </p>
      </div>
    ),
    Category: 'tickets',
  })

  Faqs.push({
    Question: 'Is this just for software developers?',
    Answer:
      'No! While our name implies we are just about devs, our events are aimed at all professionals in the software industry - developers, testers, designers, analysts, managers, etc.',
  })

  Faqs.push({
    Question: 'Will refreshments be provided?',
    Answer:
      'Yes, attendees will receive lunch and snacks throughout the day and we will have a coffee cart operating all day.',
  })

  /*
  Faqs.push({
    Question: 'What about swag?',
    Answer:
        'Yes, there will be a bunch of swag on offer on the day both from our swag table as well as with the various sponsors that will have booths. We have decided not to offer showbags this year as they often end up resulting in a lot of waste; this way attendees can choose the swag they want. We may have a small number of bags on offer if you need, but it may also be prudent to bring your own bag.',
  })
*/
  if (Conference.Venue && Conference.Venue.Wifi !== null) {
    Faqs.push({
      Question: 'Will there be wifi?',
      Answer: Conference.Venue.Wifi,
    })
  }

  Faqs.push({
    Question: 'Will childcare be available?',
    Answer: (
      <Fragment>
        DDD Melbourne will be providing onsite childcare free of charge this year on a first come first served basis for
        children. Please register at this link{' '}
        <SafeLink href={conference.ChildcareRegistrationLink} target="_blank">
          link
        </SafeLink>
        .
      </Fragment>
    ),
  })

  if (Conference.TicketPurchasingOptions !== TicketPurchasingOptions.NotOnSale) {
    Faqs.push({
      Question: 'When does registration open?',
      Answer: (
        <Fragment>
          {dates.RegistrationOpen ? (
            <Fragment>
              Now! Go to <a href="/tickets">the tickets page</a> to register.
            </Fragment>
          ) : Conference.TicketPurchasingOptions === TicketPurchasingOptions.SoldOut ? (
            <Fragment>The conference is now sold out.</Fragment>
          ) : Conference.TicketPurchasingOptions === TicketPurchasingOptions.WaitListOpen ? (
            <Fragment>The conference has an open waitlist for tickets.</Fragment>
          ) : dates.RegistrationClosed ? (
            <Fragment>Ticket sales have closed.</Fragment>
          ) : (
            <Fragment>
              Registration opens on {format(Conference.RegistrationOpenFrom, dates.DateDisplayFormat)} at{' '}
              {format(Conference.RegistrationOpenFrom, dates.TimeDisplayFormat)}.<br />
            </Fragment>
          )}
        </Fragment>
      ),
    })
  }

  Faqs.push({
    Question: 'Can I pay by cheque, invoice, cash, dollarbucks?',
    Answer: (
      <Fragment>
        Payments can be made with credit card using Ti.to via our tickets page when registrations are open. Companies
        that want to buy bulk tickets (&gt; 10) can{' '}
        <a className="maillink" href={'mailto:' + Conference.SponsorshipEmail}>
          contact our sponsorship team to discuss options
        </a>{' '}
        .
      </Fragment>
    ),
    Category: 'tickets',
  })

  Faqs.push({
    Question: 'Can I cancel/give my ticket to someone else?',
    Answer: (
      <Fragment>
        You are welcome to send someone else in your place. Please do this through{' '}
        <SafeLink href="https://ti.to" target="_blank">
          Ti.to
        </SafeLink>
        .
      </Fragment>
    ),
    Category: 'tickets',
  })

  Faqs.push({
    Question: `What is the hashtag for ${Conference.Name}?`,
    Answer: (
      <Fragment>
        The Twitter hashtag is{' '}
        <SafeLink href={'https://twitter.com/search?q=%23' + Conference.HashTag} target="_blank">
          #{Conference.HashTag}
        </SafeLink>
        .
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'Will I be photographed or filmed?',
    Answer: (
      <Fragment>
        Media personnel authorised by {Conference.Name} will be in attendance. These media personnel will respect the
        photo policy as defined in the <a href="/code-of-conduct#photo-policy">Code of Conduct</a>.
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'I want to be involved. Can I help?',
    Answer: (
      <Fragment>
        We are always looking for volunteers and sometimes looking for organisers! It takes a lot of effort to organise
        a volunteer-run conference like {Conference.Name}. Shoot us an email at{' '}
        <a className="maillink" href={'mailto:' + Conference.ContactEmail}>
          {Conference.ContactEmail}
        </a>{' '}
        and we can work with you to figure out the best way to assist.
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'How can I contact the organisers?',
    Answer: (
      <Fragment>
        We can be contacted via email at{' '}
        <a className="maillink" href={'mailto:' + Conference.ContactEmail}>
          {Conference.ContactEmail}
        </a>
      </Fragment>
    ),
  })

  Faqs.push({
    Question: `How can I sponsor ${Conference.Name}?`,
    Answer: (
      <Fragment>
        {Conference.Name} will be heavily publicised in the community and we believe offers a unique marketing and
        recruiting opportunity based on being attended by people that don't normally get to go to conferences. It's also
        a great chance to give back and support the local software community. We have various levels of sponsorship
        available with various benefits and price points. We have a sponsorship prospectus that will be provided on
        request that explains detailed benefits and impact of sponsorship and the difference between the various levels;
        if you would like a copy{' '}
        <a className="maillink" href={'mailto:' + Conference.SponsorshipEmail}>
          please contact us
        </a>
        .
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'How can I go to this kind of thing more often?',
    AnswerWithoutParagraph: (
      <Fragment>
        <p>
          Melbourne has a very active software community. Consider attending one of the meetups/conferences such as:
        </p>
        <ul>
          <li>
            <SafeLink href="https://www.meetup.com/ddd-melbourne-by-night/events/" target="_blank">
              DDD Melbourne By Night
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/melb-net-meetup/" target="_blank">
              Melb.NET
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://melbjs.com/" target="_blank">
              MelbJS
            </SafeLink>
          </li>
          <li>
            <SafeLink href="https://www.meetup.com/en-AU/golang-mel/" target="_blank">
              Golang Melbourne
            </SafeLink>
          </li>
        </ul>
        <p>
          Furthermore, you can see an up to date list of Australian conferences at{' '}
          <SafeLink href="https://github.com/telstrapurple/DevEvents" target="_blank">
            Telstra Purple DevEvents repository
          </SafeLink>
          .
        </p>
      </Fragment>
    ),
  })

  Faqs.push({
    Question: 'Who are the organisers?',
    AnswerWithoutParagraph: (
      <Fragment>
        <p>
          {Conference.Name} is organised by Oz Dev Inc. A non-profit organisation set up to create inclusive events for
          the VIC software community.
        </p>
      </Fragment>
    ),
  })

  return Faqs
}
