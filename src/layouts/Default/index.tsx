import type { FC } from 'react'
import { useContext } from 'react'

import { Loader } from '~/components/Loader'
import { AuthContext } from '~/contexts/AuthContext'

import type { LayoutProps } from '../types'

export const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  const { isError, isLogIn } = useContext(AuthContext)

  if (isError) {
    return (
      <div style={{ margin: 'auto', maxWidth: '600', height: '100vh', minHeight: '100vh', paddingBottom: 2 }}>
        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 2, color: '#ff0000' }}>ログインに失敗しました</div>
            <a href="https://github.com/hyodoblog">
              <div style={{ textDecoration: 'underline' }}>管理人へ</div>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ margin: 'auto', maxWidth: '600', height: '100vh', minHeight: '100vh', paddingBottom: 2 }}>
      {isLogIn ? children : <Loader />}
    </div>
  )
}
