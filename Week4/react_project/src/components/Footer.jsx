function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 text-center text-sm space-y-4">
      <p>Questions? Call +91 9876543210</p>
      <div className="flex justify-center gap-6 text-xs text-gray-500">
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Help Center</a>
        <a href="#" className="hover:underline">Terms of Use</a>
        <a href="#" className="hover:underline">Privacy</a>
      </div>
      <p className="mt-4 text-gray-600">&copy; 2025 Netflix Clone by Anvesha Singh</p>
    </footer>
  );
}

export default Footer;
