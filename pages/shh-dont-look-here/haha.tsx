import { Main } from 'layouts/main'
import React, { useEffect, useState } from 'react'

const ShhhHahaPage = (): JSX.Element => {
  const [joke, setJoke] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/dadjokes', {
          headers: {
            'X-Api-Key': 'Ug7GzyBMevWROJcevCZRpw==p9cpm9B1biEJe1Ix',
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch joke')
        }

        const data = await response.json()
        if (data.length > 0) {
          setJoke(data[0].joke)
        }
      } catch (error) {
        console.error('Error fetching joke:', error)
        setJoke('Failed to load joke')
      } finally {
        setLoading(false)
      }
    }

    fetchJoke()
  }, [])

  return (
    <Main title="Dad Joke of the Day">
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-xl font-bold">
          While you're hunting, you're missing Lars's spectacular dad jokes in the Main Hall!
        </h1>
        <h2>So here's one for you now...</h2>
        <br />
        {loading ? <p>Loading...</p> : <p>{joke}</p>}
        <br />
        <br />
        <h3>Now keep looking 😉</h3>
      </div>
    </Main>
  )
}

export default ShhhHahaPage
