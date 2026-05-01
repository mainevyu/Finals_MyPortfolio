import { useEffect, useState } from "react";

type Props = {
  onBack: () => void;
};

function Admin({ onBack }: Props) {
  const [messages, setMessages] = useState<any[]>([]);
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const ADMIN_PASS = "123";

  useEffect(() => {
    const saved = localStorage.getItem("admin");
    if (saved === "true") {
      setAuthorized(true);
    }
  }, []);

  useEffect(() => {
    if (authorized) {
      fetchMessages();
    }
  }, [authorized]);

  const login = () => {
    if (password === ADMIN_PASS) {
      setAuthorized(true);
      localStorage.setItem("admin", "true"); 
    } else {
      alert("Wrong password");
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/portfolio");
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  const deleteMessage = async (id: string) => {
    try {
      await fetch(`http://localhost:5000/api/portfolio/${id}`, {
        method: "DELETE",
      });

      setMessages(messages.filter((m) => m._id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const handleBack = () => {
    localStorage.removeItem("admin"); 
    onBack();
  };

  if (!authorized) {
    return (
      <div className="section">
        <div className="contact-card text-center">
          <h3 className="mb-3" style={{ color: "#25170b" }}>
            Admin Access
          </h3>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control my-3"
          />

          <button onClick={login} className="btn w-100" style={{color: "#f5f3ef"}}>
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <button onClick={handleBack} className="btn mb-3 w-40" style={{color: "#f5f3ef"}}>
        Back to Home
      </button>

      <h2 className="text-center mb-4" style={{ color: "#25170b" }}>
        Admin Dashboard
      </h2>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        {messages.length === 0 && (
          <p className="text-center" style={{ color: "#25170b" }}>
            No messages yet.
          </p>
        )}

        {messages.map((m) => (
          <div key={m._id} className="admin-card">
            <p><strong>{m.name}</strong></p>
            <p>{m.email}</p>
            <p>{m.message}</p>

            <button
              onClick={() => {
                if (window.confirm("Delete this message?")) {
                  deleteMessage(m._id);
                }
              }}
              className="btn btn-sm" style={{color: "#f5f3ef"}}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;