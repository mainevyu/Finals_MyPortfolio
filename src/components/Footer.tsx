function Footer({ onAdminAccess }: { onAdminAccess: () => void }) {
  return (
    <footer className="footer">
      <p onClick={onAdminAccess} style={{ cursor: "pointer" }}>
        © 2025 Charmaine Dagusen
      </p>
    </footer>
  );
}

export default Footer;