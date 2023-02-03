import Image from 'next/image'
import image from '../../../public/assets/Ellipse 142.png'

function StyleCard2() {
  return (
    <div className="flex items-center flex-col bg-white shadow-md w-48 rounded-lg py-3">
      <div className="mb-2">
        <Image src={image} alt="bg" />
      </div>
      <div>
        <h1 className="font-bold mb-1 text-center">Zaqky Simorang</h1>
        <p className="text-dark text-sm text-center">Trainer</p>
      </div>
    </div>
  )
}

export default StyleCard2
