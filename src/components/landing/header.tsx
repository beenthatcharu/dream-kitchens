import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-50 w-full 
        border-b border-gray-200
        bg-white
      "
    >
      <div className="
        container 
        flex flex-col items-center justify-center
        py-2
      ">
        
        {/* ⭐ Centered + Smaller Logo */}
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dtc8bbbco/image/upload/q_100,f_auto/v1765193669/logo2_cueg8i_h6hnt5.png"
            alt="Dream Kitchen Logo"
            width={140}      // ⭐ Smaller Logo
            height={70}
            className="object-contain"
            priority
          />
        </Link>

        {/* ⭐ Phone Number Below Logo */}
        <a
          href="tel:+919403893424"
          className="
            text-primary font-semibold 
            text-sm sm:text-base 
            hover:underline 
            flex items-center gap-1 mt-1
          "
        >
          <span>📞</span> +91 94038 93424
        </a>

      </div>
    </header>
  );
}
