export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 md:px-[60px] 2xl:px-[80px]">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {currentYear}{" "}
            <span className="text-[#cca300] font-semibold">
              Shean Hans Teoh
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
