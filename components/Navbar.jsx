import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/" legacyBehavior>
          <Image src="/ninjaLogo.png" width={55} height={55} />
        </Link>
      </div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="/ninjas" legacyBehavior>
        <a>Ninja Listing</a>
      </Link>
      <Link href="#" legacyBehavior>
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;
