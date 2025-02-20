import { Main } from 'layouts/main'
import React from 'react'

const ShhhNopePage = (): JSX.Element => {
  return (
    <Main title="Nope">
      <div style={{ textAlign: 'center', margin: '20px auto', maxWidth: '100%' }}>
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            maxWidth: '100%',
            background: '#000',
          }}
        >
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <br />
        <br />
        <h3>You really think we'd make it that easy?? Keep looking 😉</h3>
      </div>
    </Main>
  )
}

export default ShhhNopePage
