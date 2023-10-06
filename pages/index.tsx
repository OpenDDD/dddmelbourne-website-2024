import React from 'react'
import { Main } from 'layouts/main'
import { NextPage } from 'next'
import { Text } from 'components/global/text'
import { format } from 'date-fns'
import { useConfig } from 'Context/Config'
import getConferenceActions from '../config/actions'
import ImportantDates from '../components/importantDates'
import Link from 'next/link'
import { Sponsors } from '../components/Sponsors/sponsors'

const mailingList =
  '<div class style="padding-bottom: 10rem; padding-top: 5rem; background: #EEEEEE;"><div class="l-center-container"><div class="sc-ckVGcZ jslhpj"><h2 size="36px" color="#434D5D" class="sc-jKJlTe jjCoJJ">Join the DDD Melbourne mailing list</h2></div><div><div class="sc-bdVaJa iIDDUy"><div><div><p size="16px" color="#434d5d" class="sc-csuQGl XLzvN">Stay updated with the latest news and happenings from Melbourne\'s largest and most inclusive tech community conference.</p><div spacing="base" class="sc-kkGfuU kGKhzg"></div></div><form class="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="191722FC90141D02184CB1B62AB3DC265BD00223F5003E0E16D7B308625D157690F266858A90C998E560156AB8E74BC14E1CBB3AE2A2A046C132EEC49FF9C24D"><div size="base" class="sc-cSHVUG jZSLFe"><div size="small" class="sc-cSHVUG kXIIFK"><div><label size="0.875rem" color="#5d5d65" class="sc-gzVnrw dEVaGV">Name <span class="sc-dnqmqq iFTUZ">*</span></label><input aria-label="Name" id="fieldName" maxLength="200" name="cm-name" required class="sc-gZMcBi dshyOS" /></div></div><div size="small" class="sc-cSHVUG kXIIFK"><div><label size="0.875rem" color="#5d5d65" class="sc-gzVnrw dEVaGV">Email <span class="sc-dnqmqq iFTUZ">*</span></label><input autoComplete="Email" aria-label="Email" id="fieldEmail" maxLength="200" name="cm-jkjdgh-jkjdgh" required type="email" class="js-cm-email-input qa-input-email sc-gZMcBi dshyOS" /></div></div><div size="base" class="sc-cSHVUG jZSLFe"><div><div spacing="x-small" class="sc-kkGfuU jxYifo"></div><div size="base" class="sc-cSHVUG jZSLFe"><div><div><div class="sc-bwzfXH ebeRtN"><input aria-required id="cm-privacy-consent" name="cm-privacy-consent" required type="checkbox" class="qa-checkbox-cm-privacy-consent sc-bZQynM eKOoKL" /><label size="0.875rem" color="#434d5d" for="cm-privacy-consent" class="sc-bxivhb cOxhZt">I agree to be emailed</label><div id="cm-privacy-consent-required-label" class="sc-EHOje jMsntP">*</div></div></div><input id="cm-privacy-consent-hidden" name="cm-privacy-consent-hidden" type="hidden" value="true" /></div></div></div></div></div><button size="1rem" color="#fff" type="submit" class="js-cm-submit-button sc-jWBwVP fClqPV">Subscribe</button></form></div></div></div></div></div><style>.iIDDUy { background: rgb(255, 255, 255); border-radius: 0.3125rem; max-width: 35.25rem; margin-left: auto; margin-right: auto; padding: 2.5rem 2.75rem; position: relative; }.ebeRtN { align-items: flex-start; display: flex; }.cOxhZt { font-size: 0.875rem; padding-left: 0.5rem; overflow-wrap: break-word; word-break: break-word; font-family: Helvetica, Arial, sans-serif; color: rgb(67, 77, 93); position: relative; top: 2px; }.jMsntP { color: rgb(221, 54, 42); font-weight: 400; font-size: 0.75rem; margin-left: 0.125rem; }.eKOoKL { flex-shrink: 0; height: 1rem; position: relative; top: 0.08rem; width: 1rem; }.dEVaGV { font-family: Helvetica, Arial, sans-serif; color: rgb(93, 93, 101); display: block; font-size: 0.875rem; font-weight: 400; margin-bottom: 0.5rem; }.iFTUZ { color: rgb(221, 54, 42); }.dshyOS { appearance: none; background-color: rgb(255, 255, 255); border: 0px; border-radius: 0.1875rem; box-sizing: border-box; box-shadow: rgba(142, 154, 173, 0.1) 0px 2px 0px 0px inset, rgb(210, 215, 223) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 1px 0px 0px; color: rgb(67, 77, 93); font-size: 0.875rem; line-height: 1.5; min-height: 2.8125rem; outline: 0px; padding: 0.75rem 1rem; transition: box-shadow 0.2s ease 0s; width: 100%; }.dshyOS:focus { box-shadow: transparent 0px 0px 0px 0px inset, rgb(80, 156, 246) 0px 0px 0px 1px inset, rgba(80, 156, 246, 0.25) 0px 0px 0px 2px; }.jZSLFe { margin-bottom: 1.5rem; }.kXIIFK { margin-bottom: 1rem; }.jslhpj { margin-left: auto; margin-right: auto; max-width: 29.125rem; padding-bottom: 3.125rem; }.iclkhW { font-size: 3rem; text-align: center; letter-spacing: -1px; line-height: 1.17; -webkit-font-smoothing: antialiased; font-weight: 900; font-family: Lato, sans-serif; color: rgb(0, 0, 0); }.jjCoJJ { font-size: 36px; text-align: center; letter-spacing: -1px; line-height: 1.17; -webkit-font-smoothing: antialiased; font-family: Helvetica, Arial, sans-serif; font-weight: 700; color: rgb(67, 77, 93); }.kGKhzg { border-bottom: 1px solid rgb(210, 215, 223); margin-bottom: 1.5rem; padding-top: 1.5rem; }.jxYifo { border-bottom: 1px solid rgb(210, 215, 223); margin-bottom: 0.75rem; padding-top: 0.75rem; }.iWwGmW { margin-bottom: 0.25rem; }@-webkit-keyframes iECmZH {   0% { transform: rotate(0deg); }  100% { transform: rotate(360deg); }}@keyframes iECmZH {   0% { transform: rotate(0deg); }  100% { transform: rotate(360deg); }}.fClqPV { background-color: rgb(123, 177, 61); border: none; border-radius: 3px; color: rgb(255, 255, 255); display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 1rem; font-style: normal; font-weight: 700; line-height: 1; outline: 0px; padding: 0.75rem 1.5rem; text-decoration: none; transition: background-color 0.1s ease-in 0s, box-shadow 0.1s ease-in 0s; }.fClqPV:hover { cursor: pointer; }.XLzvN { white-space: pre-wrap; font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: rgb(67, 77, 93); }</style><script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script><script>WebFont.load({google:{families:[\'Lato:900:latin\',\'Lato:300:latin\',\'Playfair+Display:700italic:latin\',\'Merriweather:700:latin\',\'Crete+Round::latin\',\'PT+Sans+Narrow:700:latin\']}});</script><script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>'

export const Index: NextPage = () => {
  const { conference, dates, currentDate } = useConfig()
  const actions = getConferenceActions(conference, dates)

  return (
    <Main title="Home" showHero={true}>
      <section>
        <h2>
          {conference.Name} {format(conference.Date, 'y')}
        </h2>
        <Text>
          {conference.Name} is an inclusive non-profit conference for the software community. Our goal is to create an
          approachable event that appeals to the whole community, especially people who usually don’t have the
          opportunity to attend, or speak at, conferences.
        </Text>

        <ImportantDates conference={conference} actions={actions} currentDate={currentDate} />

        <p>&nbsp;</p>

        <div dangerouslySetInnerHTML={{ __html: mailingList }}></div>

        <p>&nbsp;</p>

        <h2>Sponsors</h2>
        <Text>
          We are currently looking for sponsors! If you'd like to explore sponsorship opportunities, please{' '}
          <Link href="/sponsorship">check out our sponsorship page</Link> for more information.
        </Text>
        <Sponsors
          show={!conference.HideSponsors}
          sponsors={conference.Sponsors}
          hideUpsell={conference.HideSponsorshipUpsell}
        />
      </section>
    </Main>
  )
}

export default Index
