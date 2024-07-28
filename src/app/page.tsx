import Link from "next/link";
import { HandImage } from "./icons";

export default function Page() {
  return (
    <section className="section bg">
      <div className="section__container">
        <div className="section__left">
          <HandImage />
        </div>
        <div className="section__content">
          <h1>Who wants to be a millionaire?</h1>
          <Link className="btn" href="/quiz">
            Start
          </Link>
        </div>
      </div>
    </section>
  );
}
