import Link from "next/link";

export default function FixedBookingButton() {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
      <Link
        href="#"
        className="flex items-center justify-center gap-2 w-full bg-[#FEE500] text-[#371D1E] py-4 px-6 rounded-xl font-bold text-base shadow-lg hover:bg-[#FDD835] transition-all duration-300 hover:shadow-xl"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.7 6.7-.2.8-.7 2.9-.8 3.3 0 .3.1.3.3.2.2-.1 3.3-2.2 3.8-2.6.6.1 1.3.2 2 .2 5.5 0 10-3.6 10-8S17.5 3 12 3z" />
        </svg>
        <span>1분만에 카카오톡으로 예약하기</span>
      </Link>
    </div>
  );
}
