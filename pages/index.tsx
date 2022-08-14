import type { NextPage } from "next";
import Link from "next/link";
import KeepImageAspectRatio from "../src/KeepImageAspectRatio";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/pets">Navigate to Pets</Link>
      <h2>Show image that keep aspect ratio given width 100% (like in https://nathankrasney.com/Testimonials)</h2>
      <KeepImageAspectRatio/>
    </div>
  );
};

export default Home;
