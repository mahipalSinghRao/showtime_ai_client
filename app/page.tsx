import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import HomePage from "@/features/home/home-page";

export default function Page() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
