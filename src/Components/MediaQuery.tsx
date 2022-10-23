import { useMediaQuery } from 'react-responsive'

const MediaQuery = () => {
  const isDeviceSm = useMediaQuery({ query: '(max-width: 600px)' })
  const isDeviceLg = useMediaQuery({
    query: '(min-width: 900px)',
  })
  const isDeviceMd = !isDeviceLg

  return { isDeviceSm, isDeviceLg, isDeviceMd }
}

export default MediaQuery
