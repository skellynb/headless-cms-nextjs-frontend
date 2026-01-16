import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getContact() {
  const res = await fetch(`${API_URL}/api/contact-page`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ContactPage() {
  const { data } = await getContact();
  const contact = data;

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#0f172a" }}>
      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
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

      {/* Header */}
      <section
        style={{
          padding: "80px 40px",
          background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "12px" }}>
          Contact Us
        </h1>
        <p style={{ maxWidth: "600px", margin: "auto", opacity: 0.95 }}>
          {contact.contactMessage}
        </p>
      </section>

      {/* Contact Details */}
      <section
        style={{
          padding: "60px 40px",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>Get in Touch</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              padding: "20px",
              borderRadius: "8px",
              background: "#f8fafc",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <strong>Email</strong>
            <p>{contact.email}</p>
          </div>

          <div
            style={{
              padding: "20px",
              borderRadius: "8px",
              background: "#f8fafc",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <strong>Phone</strong>
            <p>{contact.phone}</p>
          </div>

          <div
            style={{
              padding: "20px",
              borderRadius: "8px",
              background: "#f8fafc",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <strong>Address</strong>
            <p>{contact.address}</p>
          </div>
        </div>
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
        © 2026 MyCompany · Content managed in Strapi
      </footer>
    </main>
  );
}
