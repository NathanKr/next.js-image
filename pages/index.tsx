import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/pets">Navigate to Pets</Link>
      <p>Show image with fill</p>
      <div style={{ width: 300, height: 400 , position: 'relative' }}>
        <Image alt="pet-with-fill" layout="fill" src="/images/1.jpg" />
      </div>
    </div>
  );
};

export default Home;
