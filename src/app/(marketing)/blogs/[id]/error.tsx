"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const BlogError = ({error, reset} : {error: Error, reset: () => void}) => {

    const router = useRouter();

    const reload = () => {
        startTransition(() => {
            router.refresh();
        });
    };

  return (
    <>
    <div>BlogError: {error.message}</div>
    <button onClick={() => reload()}>Reset</button>
    </>
  )
}

export default BlogError