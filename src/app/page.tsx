import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="">
      <div>

        <div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
