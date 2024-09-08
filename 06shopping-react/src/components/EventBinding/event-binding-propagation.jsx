export function EventBindingPropagation() {
  function handleNavClick() {
    alert("Click Nav..");
  }

  function handleHomeClick(e) {
    e.stopPropagation();
    alert("Click Home");
  }

  return (
    <div className="conatiner-fluid">
      <nav onClick={handleNavClick} className="bg-dark text-white m-4 p-4">
        <h3>Navbar</h3>
        <button onClick={handleHomeClick} className="btn btn-light">
          Home
        </button>
      </nav>
    </div>
  );
}
