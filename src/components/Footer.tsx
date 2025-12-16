export default function Footer() {
  return (
    <footer className="bg-[#F4F1EA] border-t border-[#5D7B6F]/20 py-16 pb-32 text-[#5D7B6F] font-gowun-batang">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-2xl font-bold text-[#2E5C3C] font-marcellus mb-2">WILDFLOWER GARDEN</h2>
            <p className="text-sm leading-relaxed max-w-md mx-auto md:mx-0 opacity-80">
              자연 속에서 찾는 진정한 휴식과 치유.<br />
              들꽃치유정원에서 특별한 경험을 만들어보세요.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="text-center md:text-right space-y-3 text-sm">
            <div className="font-bold text-[#2E5C3C] mb-2">CONTACT US</div>
            <p className="opacity-80">대표. 조재원</p>
            <p className="opacity-80">경기도 양평군 양평읍 경강로 1698</p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-1 md:gap-2 opacity-80">
              <span>TEL. 010-6863-1752</span>
              <span className="hidden md:block w-px h-3 bg-[#5D7B6F]/30"></span>
              <span>Email. wildflower.yp@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#5D7B6F]/20 w-full mb-8" />

        {/* Bottom Section */}
        <div className="text-center text-xs tracking-wider opacity-60 text-[#2E5C3C]">
          <p>&copy; {new Date().getFullYear()} WILDFLOWER GARDEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
