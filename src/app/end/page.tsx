"use client";
import Link from "next/link";
import { HandImage } from "../icons";
import { useSearchParams } from "next/navigation";
export default function Page() {
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  return (
    <section className="section">
      <div className="section__container">
        <div className="section__left">
          <HandImage />
        </div>
        <div className="section__content">
          <span>Total score:</span>
          <h1>${score ? Number(score).toLocaleString("en-US") : 0}</h1>
          <Link className="btn" href="/">
            Try again
          </Link>
        </div>
      </div>
    </section>
  );
}
