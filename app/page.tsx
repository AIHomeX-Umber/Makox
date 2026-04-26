export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #f3f4f6 0, #ffffff 38%, #f8fafc 100%)",
        color: "#111827",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          maxWidth: 920,
          margin: "0 auto",
          padding: "72px 24px 56px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 12px",
            border: "1px solid #e5e7eb",
            borderRadius: 999,
            background: "rgba(255,255,255,0.75)",
            fontSize: 14,
            color: "#374151",
            marginBottom: 28,
          }}
        >
          <span>Makox V0</span>
          <span style={{ color: "#9ca3af" }}>·</span>
          <span>Built for manufacturing founders</span>
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 76px)",
            lineHeight: 1,
            letterSpacing: "-0.06em",
            margin: "0 0 22px",
            maxWidth: 820,
          }}
        >
          AI Agent for Manufacturing Global Expansion
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            lineHeight: 1.45,
            color: "#4b5563",
            maxWidth: 720,
            margin: "0 0 34px",
          }}
        >
          Turn a rough export idea into a practical go-to-market plan, first
          action, and channel strategy in 60 seconds.
        </p>

        <form
          action="/api/generate-plan"
          method="POST"
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: 24,
            boxShadow: "0 24px 70px rgba(15,23,42,0.08)",
            padding: 22,
            maxWidth: 780,
          }}
        >
          <label
            htmlFor="input"
            style={{
              display: "block",
              fontSize: 14,
              fontWeight: 600,
              color: "#374151",
              marginBottom: 10,
            }}
          >
            What are you trying to sell globally?
          </label>

          <textarea
            id="input"
            name="input"
            placeholder="Example: I run a bathroom factory in China and want to enter the European market."
            required
            style={{
              width: "100%",
              minHeight: 150,
              resize: "vertical",
              boxSizing: "border-box",
              padding: 16,
              fontSize: 16,
              lineHeight: 1.5,
              borderRadius: 16,
              border: "1px solid #d1d5db",
              outline: "none",
              color: "#111827",
              background: "#f9fafb",
              marginBottom: 16,
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px 18px",
              fontSize: 16,
              fontWeight: 700,
              background: "#111827",
              color: "#ffffff",
              borderRadius: 14,
              border: "none",
              cursor: "pointer",
            }}
          >
            Generate My Go-to-Market Plan
          </button>

          <p
            style={{
              fontSize: 13,
              color: "#6b7280",
              textAlign: "center",
              margin: "12px 0 0",
            }}
          >
            No login required. Free to try.
          </p>
        </form>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginTop: 30,
            maxWidth: 780,
          }}
        >
          {[
            "Market entry judgment",
            "Amazon / DTC / distributor path",
            "First-week action plan",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.78)",
                border: "1px solid #e5e7eb",
                borderRadius: 18,
                padding: 18,
                color: "#374151",
                fontSize: 15,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <section
          style={{
            marginTop: 58,
            padding: 24,
            borderRadius: 24,
            border: "1px solid #e5e7eb",
            background: "rgba(255,255,255,0.72)",
            maxWidth: 780,
          }}
        >
          <h2 style={{ fontSize: 24, margin: "0 0 8px" }}>
            Get early access to better strategies
          </h2>
          <p style={{ color: "#4b5563", lineHeight: 1.6, margin: "0 0 18px" }}>
            Leave your email to receive upgraded AI outputs, real export case
            studies, and private beta access as Makox improves.
          </p>

          <form action="https://formspree.io/f/YOUR_ID" method="POST">
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
                style={{
                  flex: "1 1 260px",
                  padding: "14px 16px",
                  fontSize: 16,
                  borderRadius: 14,
                  border: "1px solid #d1d5db",
                  background: "#ffffff",
                }}
              />
              <button
                type="submit"
                style={{
                  flex: "0 0 auto",
                  padding: "14px 20px",
                  fontSize: 15,
                  fontWeight: 700,
                  background: "#f3f4f6",
                  color: "#111827",
                  borderRadius: 14,
                  border: "1px solid #d1d5db",
                  cursor: "pointer",
                }}
              >
                Get Early Access
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}
