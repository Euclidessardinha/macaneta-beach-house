import Header from "@/components/Header";
import Gallery from "@/components/Gallery";

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3]">
      <Header />

      <div className="pt-20">
        <Gallery />
      </div>
    </main>
  );
}