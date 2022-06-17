import React from 'react'
import getVolunteerOpportunities from 'config/volunteerOpportunities'
import { Text } from 'components/global/text'
import { Main } from 'layouts/main'
import { NextPage } from 'next'
import { useConfig } from 'Context/Config'
import { VolunteerOpportunityList } from 'components/Volunteer/VolunteerOpportunityList'

const VolunteerPage: NextPage = () => {
  const { conference } = useConfig()

  let webform = '';

  if (conference.VolunteerSubmissionFormId) {
    webform = `
  <script>
    (function(e, t, a, i, d, n, o) {
        var WEBFORM_DATA = {
            formId: '${conference.VolunteerSubmissionFormId}',
            divId: '_sm_webform_',
            linkName: 'webforms.salesmate.io'
        };
        WEBFORM_DATA.loadElement = t.currentScript;
        e[i] = e[i] || function() {
            (e[i].q = e[i].q || []).push(arguments)
        }, n = t.createElement(a), n.onload = function() {
            if (!WEBFORM_DATA.divId || !t.getElementById(WEBFORM_DATA.divId)) {
                ld = t.createElement('div');
                ld.id = WEBFORM_DATA.formId + __salesmate_webform_iframes__.length;
                WEBFORM_DATA.loadElement.parentNode.insertBefore(ld, WEBFORM_DATA.loadElement);
                WEBFORM_DATA.divId = ld.id
            }
            SmFormSettings.loadForm(WEBFORM_DATA);
        }, o = t.getElementsByTagName(a)[0], n.id = i, n.src = d, n.async = 1, o.parentNode.insertBefore(n, o)
    })(window, document, "script", "loadFormScript", "https://webforms.salesmate.io/webforms.js");
</script>
  `;
  }
  return (
    <Main title="Work With Us" description={`Work with us to organise the ${conference.Name} conference.`} pageBanner="/static/images/volunteer-banner">
      <h1>Work With Us</h1>
      <Text>
        {conference.Name} cannot happen each year without a committed group of volunteers. There is heaps
        to get done both in the lead-up to, and on the day of the event itself.
      </Text>
      <Text>
        If you would like to be part of the community that makes {conference.Name} happen, check out our
        current open volunteer opportunities below - and sign up! On the form below, you can nominate your
        interest in more than one role as well, if you're up to it.
      </Text>

      <h2>Volunteer Opportunities</h2>
      <VolunteerOpportunityList opportunities={getVolunteerOpportunities()} />
      <div id="volunteer_form" dangerouslySetInnerHTML={{ __html: webform }}></div>
    </Main >
  )
}

export default VolunteerPage