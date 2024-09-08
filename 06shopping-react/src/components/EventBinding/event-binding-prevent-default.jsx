export function EventBindingPreventDefault() {
  function handleSubmitClick(e) {
    alert("Form will submit its data to server-API");
    e.preventDefault();
  }
  return (
    <div className="container-fluid">
      <h2>Register</h2>
      <form onSubmit={handleSubmitClick}>
        User Name : <input type="text" name="username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
