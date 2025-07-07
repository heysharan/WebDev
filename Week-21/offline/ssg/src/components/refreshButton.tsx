"use client"

import revalidate from "@/app/lib/actions/revalidateAction"
import { useTransition } from "react"

export default function RefreshButton() {
    const [ isPending, startTransition ] = useTransition()
    return(
        <button className="bg-white text-black rounded-md p-1 my-2" onClick={() => {
            startTransition(() => {revalidate()})
        }} disabled={isPending}>{isPending ? "Refreshing..." : "Refresh Todo"}
        </button>
    )
}