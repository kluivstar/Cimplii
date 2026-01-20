import Links from './Links'
import Logo from '../../assets/cimplii.png'

export default function Navbar() {

  return (
    <main className="px-4 bg-[#7fc1dbe1]">
      <nav className='flex justify-between items-center -mt-4 2xl:px-5'>
        {/* Navigation Logo */}
        <div className="">
          <img src={Logo} className='xl:w-32 2xl:w-40' alt="Cimplii Logo" width="100" />
        </div>
        {/* Navigation Links */}
        <Links/>
      </nav>
    </main>
  )
}
