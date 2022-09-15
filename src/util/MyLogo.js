import Image from "next/image"

const Logo = require('../assets/logo_felipe.jpg')

function MyImage() {
  return (
    <Image
        src={Logo}
        alt="Felipe Logo"
        width={200}
        height={200} />
  )
}
    
export default MyImage