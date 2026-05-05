import FadeIn from "@/components/FadeIn";
import { SHOWS } from "@/lib/config";

function formatDate(iso: string) {
  const d = new Date(iso);
  return {
    day: d.toLocaleDateString("en-GB", { day: "2-digit" }),
    month: d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase(),
    year: d.getFullYear(),
  };
}

export default function Shows() {
  return (
    <section
      id="shows"
      className="py-24 md:py-36"
      style={{ background: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className="border-t mb-14"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        />

        <FadeIn>
          <div className="flex items-baseline justify-between mb-14">
            <h2
              className="leading-none"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                color: "#F2F2F2",
                letterSpacing: "0.01em",
              }}
            >
              Shows
            </h2>
            {SHOWS.length > 0 && (
              <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#9A9A9A" }}>
                Upcoming
              </p>
            )}
          </div>
        </FadeIn>

        {SHOWS.length === 0 ? (
          <FadeIn delay={100}>
            <div
              className="py-12 flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p
                className="text-sm tracking-[0.15em] uppercase"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                No upcoming shows
              </p>
            </div>
          </FadeIn>
        ) : (
          <div>
            {SHOWS.map((show, i) => {
              const date = formatDate(show.date);
              return (
                <FadeIn key={show.date + show.venue} delay={i * 60}>
                  <div
                    className="grid items-center py-5 gap-4 group transition-colors duration-200"
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      gridTemplateColumns: "72px 1fr 1fr auto",
                    }}
                  >
                    {/* Date */}
                    <div>
                      <p
                        className="text-xl leading-none font-light tabular-nums"
                        style={{ fontFamily: "var(--font-syne)", color: "#F2F2F2" }}
                      >
                        {date.day}
                      </p>
                      <p
                        className="text-xs tracking-[0.15em] mt-0.5"
                        style={{ color: "#9A9A9A" }}
                      >
                        {date.month} {date.year}
                      </p>
                    </div>

                    {/* Event name */}
                    <p
                      className="text-sm md:text-base font-medium tracking-wide"
                      style={{ color: "#F2F2F2" }}
                    >
                      {show.name}
                    </p>

                    {/* Venue + city */}
                    <p className="text-sm hidden md:block" style={{ color: "#9A9A9A" }}>
                      {show.venue}
                      <span
                        className="ml-2"
                        style={{ color: "rgba(255,255,255,0.2)" }}
                      >
                        — {show.city}
                      </span>
                    </p>

                    {/* Ticket link */}
                    {show.ticketUrl ? (
                      <a
                        href={show.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors duration-300 text-right"
                      >
                        Tickets
                      </a>
                    ) : (
                      <span
                        className="text-xs tracking-[0.2em] uppercase text-right"
                        style={{ color: "rgba(255,255,255,0.2)" }}
                      >
                        Free
                      </span>
                    )}
                  </div>
                </FadeIn>
              );
            })}

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
          </div>
        )}
      </div>
    </section>
  );
}
