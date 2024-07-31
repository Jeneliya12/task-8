function Footer({ name, year }) {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4 text-center">
      <p className="text-sm">
        © {year} {name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
