import { Main } from 'layouts/main'
import React from 'react'

const ShhhDDDIsLifePage = (): JSX.Element => {
  return (
    <Main title="Nice try">
      <div style={{ textAlign: 'center' }}>
        <h1>DDD is Life!</h1>
        <h3>Don't forget to check out all the community groups in the Yellow Room (Collins Room)</h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
            margin: '40px auto',
          }}
        >
          <div style={{ flex: '1 1 30%', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/static/images/sponsors/k8sug global transparent.png"
              alt="K8SUG"
              style={{ width: '200px', height: 'auto' }}
            />
          </div>
          <div style={{ flex: '1 1 30%', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/static/images/sponsors/Linux Logo primary.svg"
              alt="Linux Australia"
              style={{ width: '200px', height: 'auto' }}
            />
          </div>
          <div style={{ flex: '1 1 30%', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/static/images/sponsors/MECR.png"
              alt="Microsoft Enthusiasts Club RMIT"
              style={{ width: '200px', height: 'auto' }}
            />
          </div>
          <div style={{ flex: '1 1 30%', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/static/images/sponsors/TLL-stacked-purple.svg"
              alt="Tech Leading Ladies"
              style={{ width: '200px', height: 'auto' }}
            />
          </div>
          <div style={{ flex: '1 1 30%', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/static/images/sponsors/Women Coders Logo.svg"
              alt="Women Coders"
              style={{ width: '200px', height: 'auto' }}
            />
          </div>
          <div style={{ flex: '1 1 30%', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/static/images/sponsors/Women4STEM.png"
              alt="Women 4 STEM"
              style={{ width: '200px', height: 'auto' }}
            />
          </div>
        </div>
        <br />
        <h3>While you're visiting them, keep an eye out for you-know-what!</h3>
      </div>
    </Main>
  )
}

export default ShhhDDDIsLifePage
