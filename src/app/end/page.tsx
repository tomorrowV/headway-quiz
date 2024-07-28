"use client";
import Link from "next/link";
import { HandImage } from "../icons";
import { useSearchParams } from "next/navigation";
export default function Page() {
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
