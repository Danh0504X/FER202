function Footer({ info }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <img
          src={info.avatar}
          alt="Avatar"
          className="footer-avatar"
        />
        <div className="footer-text">
          <h5 className="footer-name">{info.name}</h5>
          <p className="footer-email">{info.email}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;