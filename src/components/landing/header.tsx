import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/100">
      <div className="container flex h-20 md:h-24 items-center justify-between px-2">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dtc8bbbco/image/upload/q_100,f_auto/v1765193669/logo2_cueg8i_h6hnt5.png"
            alt="Dream Kitchen Logo"
            width={200}
            height={100}
            className="object-contain w-[130px] sm:w-[160px] md:w-[200px] h-auto"
            priority
          />
        </Link>

        {/* Phone Number */}
        <a
          href="tel:+919403893424"
          className="text-primary font-semibold 
                     text-xs sm:text-sm md:text-lg 
                     hover:underline flex items-center gap-1 sm:gap-2 whitespace-nowrap"
        >
          <span>📞</span> +91 94038 93424
        </a>

      </div>
    </header>
  );
}
