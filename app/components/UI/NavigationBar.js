import Image from "next/image";
export default function NavigationBar() {
  return (
    <nav className="bg-white md:py-2 flex justify-center">
      <Image
        src="/images/logo.png"
        alt="Virac Special Logo"
        width="100"
        height="100"
      />
    </nav>
  );
}
