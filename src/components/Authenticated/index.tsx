import { LiffMockPlugin } from '@line/liff-mock'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Script from 'next/script'
import { useContext } from 'react'

import { AuthContext } from '~/contexts/AuthContext'

const liffId = process.env.NEXT_PUBLIC_LIFF_ID!
// const [lineChannelId, _] = liffId.split('-')

export const Authenticated = () => {
  const auth = getAuth()
  const { setUser: setUserContext } = useContext(AuthContext)

  const login = async (): Promise<void> => {
    const idToken = liff.getIDToken()!
    console.info(idToken, 'をもとにfirebase tokenを取得する')
    // const { token } = await apiLogin({ idToken, channelId: lineChannelId })
    // await signInWithCustomToken(auth, token)
  }

  const setUser = async (userId: string): Promise<void> => {
    // setUserContext(user)
  }

  const liffInit = async () => {
    const handleError = (err: any) => {
      console.error(err)
      setUserContext(null)
    }

    try {
      if (process.env.NODE_ENV === 'development') {
        liff.use(new LiffMockPlugin())
        // @ts-ignore
        await liff.init({ liffId, mock: true })
        liff.login()
      } else {
        await liff.init({ liffId })
      }

      await login()

      onAuthStateChanged(
        auth,
        async (user) => {
          try {
            if (user) {
              await setUser(user.uid)
            }
          } catch (err) {
            handleError(err)
          }
        },
        (err) => handleError(err)
      )
    } catch (err) {
      handleError(err)
    }
  }

  return <Script src="https://static.line-scdn.net/liff/edge/2/sdk.js" onLoad={() => liffInit()} />
}
