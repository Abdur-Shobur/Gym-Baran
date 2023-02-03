import Image from 'next/image'
import image from '../../../public/assets/Group 3865.png'

function StyleCard() {
  return (
    <div className="flex items-center bg-white shadow-md w-48 rounded-lg">
      <div>
        <Image src={image} alt="bg" />
      </div>
      <div>
        <h1 className="font-bold mb-2">150+</h1>
        <p className="text-dark text-sm">Members</p>
      </div>
    </div>
  )
}

export default StyleCard
