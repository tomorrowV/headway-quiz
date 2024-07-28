// Import necessary modules
"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { HandImage } from "../icons";
import { Suspense } from "react";

function PageContent() {
  const searchParams = useSearchParams();
  const scoreParam = searchParams.get("score");
  const score = scoreParam ? Number(scoreParam) : 0;

  return (
    <section className="section">
      <div className="section__container">
        <div className="section__left">
          <HandImage />
        </div>
        <div className="section__content">
          <span>Total score:</span>
          <h1>${score.toLocaleString("en-US")}</h1>
          <Link className="btn" href="/">
            Try again
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
