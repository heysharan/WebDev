import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

export default async function () {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <div className="flex flex-col gap-2">
      <Appbar />
      <p className="w-fit text-2xl font-bold bg-white rounded-lg text-black p-2 mt-2">
        From Server Component --- {JSON.stringify(session)}
      </p>
    </div>
  );
}
