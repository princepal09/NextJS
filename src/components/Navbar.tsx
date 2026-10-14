import Link from 'next/link'



const Navbar = () => {
  return (
    <nav>
        <div>
            <Link href={"/"}>Home</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/classroom"}>Classroom</Link>
        </div>
    </nav>
  )
}

export default Navbar