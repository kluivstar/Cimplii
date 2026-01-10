import Links from './Links'
import Logo from '../../assets/cimplii.png'

export default function Navbar() {

  return (
    <main className="p-5">
      <nav className='flex xl:hidden justify-between items-center px-5'>
        {/* Navigation Logo */}
        <div className="">
          <img src={Logo} alt="Cimplii Logo" width="120" />
        </div>
        {/* Navigation Links */}
        <Links/>
      </nav>
    </main>
  )
}
