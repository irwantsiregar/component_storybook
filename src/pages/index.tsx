import Button from "@/components/ui/Button";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start rounded-sm">
        {/* Start Component */}
        <Button
          // startContent={<CiHeart size={30} className="text-pink-400" />}
          // endContent={<CiMinimize1 size={30} className="text-pink-400" />}
          bgColor="danger"
          // variant="bordered"
          radius="full"
          size="lg"
          tooltipText="Try using Tab to focus on the buttons as well"
          tooltipPosition="bottom"
          // isLoading
          // isIconOnly
          // spinnerPlacement="end"
          // spinner={
          //   <RingLoader
          //     color="#FFFFFF"
          //     loading={true}
          //     className="block my-0 mx-auto border-slate-100"
          //     size={22}
          //     aria-label="Loading Spinner"
          //     data-testid="loader"
          //   />
          // }
        >
          Save
        </Button>
        {/* End Component */}
      </main>
    </div>
  );
}
