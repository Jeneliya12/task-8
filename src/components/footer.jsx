function Footer({ name, year }) {
  return (
    <footer className="bg-brown-200 text-white p-4 text-center text-4xl">
      <p className="text-sm">
        © {year} {name}. All rights reserved.
      </p>
      <p className="text-sm">123 Culinary Lane, Food City, FC 12345</p>
      <p className="text-sm">Phone: (123) 456-7890</p>
    </footer>
  );
}

export default Footer;
