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
      <div className="section-fit">
        <div className="admin-login-box">
          <h3>Admin Access</h3>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="admin-input"
          />
          <button onClick={login} className="btn-navy w-100">
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <button onClick={handleBack} className="btn-back">
            Back to Home
          </button>
        </div>

        <h2 className="header-title text-center mb-5">Admin Dashboard</h2>

        <div className="messages-wrapper">
          {messages.length === 0 ? (
            <div className="text-center py-5">
              <p style={{ color: "#25170b", opacity: 0.6 }}>No messages yet.</p>
            </div>
          ) : (
            messages.map((m) => (
              <div key={m._id} className="admin-card">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <strong>{m.name}</strong>
                    <span className="email-tag">{m.email}</span>
                  </div>
                </div>

                <p className="admin-message-text">{m.message}</p>

                <button
                  onClick={() => {
                    if (window.confirm("Delete this message?")) {
                      deleteMessage(m._id);
                    }
                  }}
                  className="btn-delete"
                >
                  Delete Message
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
