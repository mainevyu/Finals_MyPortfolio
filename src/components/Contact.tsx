import { useState } from "react";
import { Container } from "react-bootstrap";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      alert("Message sent!");

      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      alert("Error sending message");
    }

    setLoading(false);
  };

  return (
    <div id="contact" className="section">
      <Container fluid className="px-5">

        <div className="header text-center">
          <h1>Contact Me</h1>
        </div>

        <form className="contact-box mx-auto" onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="form-control mb-3"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <textarea
            className="form-control mb-3"
            placeholder="Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button className="btn btn-dark w-100" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

      </Container>
    </div>
  );
}

export default Contact;