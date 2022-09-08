const NavBar = ({ totalCounters }) => {
  console.log('Navbar- Rendered');
  return (
    <nav className='navbar navbar-light bg-light'>
      <a href='/' className='navbar-brand'>
        Navbar{' '}
        <span className='badge badge-pil badge-secondary'>{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
