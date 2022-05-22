import type { FC } from 'react'

import type { LayoutProps } from '../types'

export const DefaultWrapperLayout: FC<LayoutProps> = ({ children }) => {
  return <section className="m-4 mt-2">{children}</section>
}
