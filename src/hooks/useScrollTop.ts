import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useScrollTop = () => {
  const location = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
}
