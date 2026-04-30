import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Form, Button } from "react-bootstrap";


type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
        
    // Handle input change
    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Validate inputs
    const validate = () => {
        if (!formData.name || !formData.email || !formData.message) {
        return "Please fill in all fields."; }
            const emailPattern = /\S+@\S+\.\S+/;
            
            if (!emailPattern.test(formData.email)) {
                return "Invalid email format.";
            }
                return "";
            };
            
    // Submit form
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const error = validate();

      if (error) {
        setStatus(error);
        return;
      }

      setLoading(true);
      setStatus("");

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          import.meta.env.VITE_EMAIL_PUBLIC_KEY
        );

        await fetch("http://localhost:5000/api/portfolio", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

      } catch (error) {
        console.error(error);
        setStatus("Failed to send message.");
      }

      setLoading(false);
    };

        return (
        <div id="contact" className="section">
          <Container fluid className="px-5">

            <div className="header text-center">
              <h1>Contact</h1>
              <p>Reach out for collaborations, inquiries, or just to say hi!</p>
            </div>

            <div className="contact-card mx-auto mt-4">
              <Form onSubmit={handleSubmit}>

                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mb-3"
                />

                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mb-3"
                />

                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mb-3"
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="btn-navy w-100"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>

              </Form>

              {status && <p className="mt-3 text-center">{status}</p>}
            </div>

          </Container>
        </div>
      );
}