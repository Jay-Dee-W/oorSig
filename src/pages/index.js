import Head from "next/head";
import { x } from "@xstyled/emotion";

export default function Home() {
  return (
    <>
      <Head>
        <title>testing</title>
      </Head>

      <x.div p={10} maxW="2xl">
        <x.h1 fontSize="2xl">testing</x.h1>
      </x.div>
    </>
  );
}
