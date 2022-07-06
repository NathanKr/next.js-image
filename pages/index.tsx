import type { NextPage } from "next";
import Link from "next/link";
import Pets from "./pets";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/pets">
        Navigate to Pets
      </Link>
    </div>
  );
};

export default Home;
