import { Main } from 'layouts/main'
import React, { type JSX } from 'react'

const ShhhNiceTryPage = (): JSX.Element => {
  return (
    <Main title="Nice try">
      <div style={{ textAlign: 'center', margin: '20px auto' }}>
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3J2eDR3ZXFnMnc4cWJzb2tzZ3hqeXozZ2hzMm4yMzU0bXNjbW9qNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/USE5vWQyWQvHxVmNIb/giphy.gif"
          alt="Nice try"
        />
        <br />
        <h3>Keep looking 😉</h3>
      </div>
    </Main>
  )
}

export default ShhhNiceTryPage
