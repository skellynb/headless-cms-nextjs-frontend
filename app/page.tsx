import Link from "next/link";

async function getPosts() {
  const res = await fetch("http://localhost:1337/api/posts", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#0f172a" }}>
      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <strong>MyCompany</strong>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          padding: "100px 40px",
          background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>
          Modern Marketing Site
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "600px", margin: "auto" }}>
          A real-world Headless CMS proof of concept using Strapi as the backend
          and Next.js for the frontend.
        </p>

        <Link
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "12px 24px",
            background: "#fff",
            color: "#1e3a8a",
            borderRadius: "6px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Contact Us
        </Link>
      </section>

      {/* Content Section */}
      <section
        style={{
          padding: "60px 40px",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2 style={{ marginBottom: "30px", fontSize: "28px" }}>
          Latest Updates
        </h2>

        {posts.data.map((post: any) => (
          <article
            key={post.id}
            style={{
              marginBottom: "40px",
              padding: "20px",
              borderRadius: "8px",
              background: "#f8fafc",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
              {post.title}
            </h3>

            {post.description?.[0]?.children?.[0]?.text && (
              <p style={{ color: "#475569", lineHeight: 1.6 }}>
                {post.description[0].children[0].text}
              </p>
            )}

            <small style={{ color: "#64748b" }}>
              Slug: {post.slug}
            </small>
          </article>
        ))}
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "30px",
          textAlign: "center",
          background: "#0f172a",
          color: "#cbd5f5",
        }}
      >
        © 2026 MyCompany · Content managed in Strapi · UI built with Next.js
      </footer>
    </main>
  );
}
