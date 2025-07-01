const Footer = () => {
  return (
    <footer className="px-6 py-6 border-t border-[#333] text-center">
      <p className="text-primary text-sm leading-4">
        {`Built by Aoda Zhang.© Copyright ${new Date().getFullYear()}.All Rights Reserved.`}
      </p>
    </footer>
  );
};
export default Footer;
