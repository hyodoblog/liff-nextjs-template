import Image from 'next/image'

export const Loader = () => (
  <div
    style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Image src="/images/LINE_spinner_dark.svg" width={30} height={30} alt="line loader" />
  </div>
)
