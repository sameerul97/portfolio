import { useEffect, useState, useRef } from 'react'

const useSetMinHeight = () => {
  const [height, setHeight] = useState(window.innerWidth)
  const ref = useRef<HTMLDivElement>(null);

  const handleWindowSizeChange = () => {
    if (ref.current) {
      setHeight(ref.current.clientHeight)
    }
  }

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight)

      window.addEventListener('resize', handleWindowSizeChange)
    }

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return [ref, height]
}

export default useSetMinHeight
