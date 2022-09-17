import Image from "next/image"

const Logo = require('../assets/logo_felipe.jpg')

export default function MyImage() {
  return (
    <Image
        src={Logo}
        alt="Felipe Logo"
        width={200}
        height={200} />
  )
}
    