import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="relative h-32 w-screen">
        <Image src="/outdoor.png" alt="Outdoor" fill />
      </div>
      <main className=""></main>
      <footer className=""></footer>
    </div>
  );
}
