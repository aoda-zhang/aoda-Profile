const Footer = () => {
  return (
    <footer className="px-6 py-6 border-t border-[#333] text-center">
      <pre
        className="text-[#00FF00] text-sm leading-4"
        style={{ textShadow: "0 0 5px #00FF00" }}
      >
        {String.raw`        _
   /_\
  (o o)
--oOO--(_)---[ aoda.dev ]---OOo--`}
      </pre>
    </footer>
  );
};
export default Footer;
