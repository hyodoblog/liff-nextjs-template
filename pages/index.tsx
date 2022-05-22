import type { NextPage } from 'next'
import { useContext } from 'react'

import { AuthContext } from '~/contexts/AuthContext'
import { DefaultLayout } from '~/layouts/Default'

const HomePage: NextPage = () => {
  const { user } = useContext(AuthContext)

  return (
      <DefaultLayout>
        <div style={{ marginTop: '20%', textAlign: 'center' }}>
          name: {user!.name}
          <br />
          userUid: {user!.userUid}
        </div>
      </DefaultLayout>
  )
}

export default HomePage
