import { useState } from "react";
import { LeafMark } from "@/components/Leaf";
import { gmailLink, mailtoLink } from "@/lib/mail";

/** "Сэтгэгдэл бичих" — collects a review and emails it to the official inbox. */
export function ReviewForm({ mn }: { mn: boolean }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const label = "text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/60";
  const field =
    "mt-2 min-h-[52px] w-full rounded-xl border border-cream/20 bg-white/5 px-4 text-base text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold";

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      setError(mn ? "Нэр болон сэтгэгдлээ бичнэ үү." : "Please add your name and comment.");
      return;
    }
    setError("");
    const subject = `GREYSEED review — ${name.trim()} (${rating}/5)`;
    const lines: [string, string][] = [
      [mn ? "Нэр" : "Name", name.trim()],
      [mn ? "Үнэлгээ" : "Rating", `${rating}/5`],
      [mn ? "Сэтгэгдэл" : "Comment", comment.trim()],
    ];
    window.location.href = mailtoLink(subject, lines);
    window.setTimeout(() => window.open(gmailLink(subject, lines), "_blank", "noopener"), 600);
    setSent(true);
  };

  if (!open) {
    return (
      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold tracking-wide text-navy-deep transition-transform active:scale-[0.99]"
        >
          {mn ? "Сэтгэгдэл бичих" : "Write a review"}
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-cream/15 bg-white/5 p-6">
      {sent ? (
        <div className="text-center">
          <LeafMark className="mx-auto h-8 w-8 text-gold" />
          <h3 className="mt-3 font-serif text-xl text-cream">
            {mn ? "Баярлалаа!" : "Thank you!"}
          </h3>
          <p className="mt-2 text-sm text-cream/70">
            {mn
              ? "Сэтгэгдлийг тань и-мэйлээр илгээх цонх нээгдлээ. Илгээх товчийг дарж баталгаажуулна уу."
              : "Your mail app opened with the review — press send to deliver it."}
          </p>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setOpen(false);
              setName("");
              setComment("");
              setRating(5);
            }}
            className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-full border border-cream/30 px-6 text-sm font-semibold text-cream"
          >
            {mn ? "Хаах" : "Close"}
          </button>
        </div>
      ) : (
        <form onSubmit={send} className="space-y-5">
          <h3 className="font-serif text-xl text-cream">
            {mn ? "Сэтгэгдэл бичих" : "Write a review"}
          </h3>

          <div>
            <label className={label} htmlFor="review-name">
              {mn ? "Нэр" : "Name"}
            </label>
            <input
              id="review-name"
              className={field}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={mn ? "Таны нэр" : "Your name"}
            />
          </div>

          <div>
            <p className={label}>{mn ? "Үнэлгээ" : "Rating"}</p>
            <div className="mt-2 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setRating(s)}
                  onMouseEnter={() => setHover(s)}
                  onMouseLeave={() => setHover(0)}
                  aria-label={`${s} / 5`}
                  aria-pressed={rating === s}
                  className="grid h-11 w-11 place-items-center text-2xl leading-none transition-colors"
                >
                  <span className={(hover || rating) >= s ? "text-gold" : "text-cream/25"}>★</span>
                </button>
              ))}
              <span className="ml-2 text-sm text-cream/60">{rating}/5</span>
            </div>
          </div>

          <div>
            <label className={label} htmlFor="review-comment">
              {mn ? "Сэтгэгдэл" : "Comment"}
            </label>
            <textarea
              id="review-comment"
              className={`${field} min-h-[110px] py-3`}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={
                mn ? "Хоол, үйлчилгээ, орчны талаар..." : "Food, service, atmosphere..."
              }
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy-deep"
            >
              {mn ? "Илгээх" : "Send review"}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full border border-cream/30 text-sm font-semibold text-cream"
            >
              {mn ? "Болих" : "Cancel"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
