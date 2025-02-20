import { Main } from 'layouts/main'
import React from 'react'

const ShhhNopePage = (): JSX.Element => {
  return (
    <Main title="Nope">
      <div style={{ textAlign: 'center', margin: '20px auto' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <br />
        <br />
        <h3>You really think we'd make it that easy?? Keep looking 😉</h3>
      </div>
    </Main>
  )
}

export default ShhhNopePage
