function Footer({ onAdminAccess }: { onAdminAccess: () => void }) {
  return (
    <footer className="footer">
      <p onClick={onAdminAccess} style={{ cursor: "pointer" }}>
        © 2025 Charmaine Dagusen
      </p>
      <footer className="footer-sub">
        <p>All Rights Reserved.</p>
      </footer>
    </footer>
  );
}

export default Footer;