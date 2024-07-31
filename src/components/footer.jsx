function Footer({ name, year }) {
  return (
    <footer className="bg-pink-500 text-white p-4 text-center text-4xl">
      <p className="text-sm">
        © {year} {name}. All rights reserved.
      </p>
      <p className="text-sm">145 Mace St, NYC</p>
      <p className="text-sm">Phone: (123) 456-7890</p>
    </footer>
  );
}

export default Footer;
