import Image from "next/image";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
    <div className="flex justify-center">
      <Image src="/IMG_4132.svg" alt="image" width="200" height="200" />
      
      <div>
        <div>
          <h1 className="text-5xl font-bold">Anil Antony</h1>
          <span>following</span>
          <span>message</span>
          <span>...</span>
          <div />
        </div>
        <div>
          <span>29 Years</span>
          <span>05 Followers</span>
          <span>2001 Following</span>
        </div>
        <div>
          <span>Programmer</span>
        </div>
      </div>
    </div>
    </>
  )
}
