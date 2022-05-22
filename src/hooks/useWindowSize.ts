import { useEffect, useState } from 'react'

interface Props {
  width: number
  height: number
}

export const useWindowSize = (): Props => {
  const [windowSize, setWindowSize] = useState<Props>({
    width: 0,
    height: 0
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }

      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    } else {
      return
    }
  }, [])

  return windowSize
}
