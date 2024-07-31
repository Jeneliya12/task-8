function Header({ age, bio }) {
  return (
    <header className="bg-blue-500 text-white p-4 mb-4">
      <h1 className="text-xl font-bold">Header</h1>
      <p>{age}</p>
      <p>{bio}</p>
    </header>
  );
}
export default Header;
