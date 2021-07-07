
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Loader } from '../components/Loader/index'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push('Home'), 5500)
  })

  return (
    <Loader />
  )
}
