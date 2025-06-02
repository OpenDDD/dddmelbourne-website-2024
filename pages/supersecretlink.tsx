import React, { type JSX } from 'react'
import { Main } from 'layouts/main'

const form =
  '<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=1Fl-EtxArEOMrZBBUn5pEsOsP0_dXbtBp9bJbYo9i1BUMkhQTVo3R0lFSUhTQVM2MlE0NDNHUk1QMi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen > {\' \'} </iframe>'

const SuperSecretLinkPage = (): JSX.Element => {
  const memeImages = [
    'static/images/memes/meme1.png',
    'static/images/memes/meme2.png',
    'static/images/memes/meme3.png',
    'static/images/memes/meme4.jpg',
    'static/images/memes/meme5.png',
    'static/images/memes/meme6.png',
    'static/images/memes/meme7.jpg',
    'static/images/memes/meme8.jpg',
    'static/images/memes/meme9.jpg',
    'static/images/memes/meme10.jpg',
  ]

  const randomlySelectedMemeImage = memeImages[Math.floor(Math.random() * memeImages.length)]

  return (
    <Main title="Secret 🤫">
      <div style={{ textAlign: 'center' }}>
        <img src={randomlySelectedMemeImage} width="300px" style={{ display: 'block', margin: '0 auto' }} />

        <br />
        <br />

        <h1>You've found the super secret link!</h1>
        <p>&nbsp;</p>
        <h2>Submit the form below for a chance to win the super secret prize at the end of today.</h2>

        <p>&nbsp;</p>

        <div dangerouslySetInnerHTML={{ __html: form }}></div>
      </div>
    </Main>
  )
}

export default SuperSecretLinkPage
