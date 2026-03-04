
const Header = () => {
  const navItems = [
    { label: 'H', href: '#hero', title: 'Home' },
    { label: 'P', href: '#projects', title: 'Projects' },
    { label: 'S', href: '#skills', title: 'Skills' },
    { label: 'E', href: '#experience', title: 'Experience' },
    { label: 'D', href: '#education', title: 'Education' },
    { label: 'C', href: '#contact', title: 'Contact' },
  ];

  return (
    <header className="sidebar card-base">
      <div className="brand-circle" style={{ width: '40px', height: '40px', background: 'white', borderRadius: '50%', marginBottom: '20px' }} />

      <nav className="nav-menu">
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          {navItems.map(item => (
            <li key={item.label}>
              <a href={item.href} className="nav-link-circle" title={item.title}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ marginTop: 'auto', width: '32px', height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
    </header>
  );
};

export default Header;
