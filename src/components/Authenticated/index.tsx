import { LiffMockPlugin } from '@line/liff-mock'
import Script from 'next/script'
import { useContext } from 'react'

import { AuthContext } from '~/contexts/AuthContext'

const liffId = process.env.NEXT_PUBLIC_LIFF_ID!

export const Authenticated = () => {
  const { setUser: setUserContext } = useContext(AuthContext)

  const setUser = async (userUid: string): Promise<void> => {
    // 今回はデモ用のテンプレートコードなので、nameに仮のdisplayNameを設定している
    // 本来はここでuserUidをもとにDBから値を取り、setUserContextに反映させる
    setUserContext({
      userUid,
      name: (await liff.getProfile()).displayName
    })
  }

  const handleError = (err: any) => {
    console.error(err)
    setUserContext(null)
  }

  const liffInit = async () => {
    try {
      if (process.env.NODE_ENV === 'development') {
        liff.use(new LiffMockPlugin())
        await liff.init({ liffId, mock: true })
        liff.login()
      } else {
        await liff.init({ liffId })
      }

      const profile = await liff.getProfile()
      setUser(profile.userId)

      console.info(profile)
    } catch (err) {
      handleError(err)
    }
  }

  return <Script src="https://static.line-scdn.net/liff/edge/2/sdk.js" onLoad={() => liffInit()} />
}
