'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:4000/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error connecting to API'))
  }, [])

  return (
    <main className="flex justify-center items-center min-h-screen bg-black text-white text-4xl font-bold">
      {message}
    </main>
  )
}
