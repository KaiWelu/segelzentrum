const Footer = () => {
  return (
    <footer className="w-full py-8 bg-primary-2 text-white mt-16">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-sm gap-1">
          <p className="font-semibold">
            CVJM Freizeit- und Segelzentrum Ratzeburg gGmbH
          </p>
          <p className="font-light">Domhof 36 - 23909 Ratzeburg</p>
          <p className="font-light">Telefon: 04541 / 89906-0</p>
          <p className="font-light">
            E-Mail:{" "}
            <a
              href="mailto:info@cvjm-ratzeburg.de"
              className=" hover:font-semibold"
            >
              info@cvjm-ratzeburg.de
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center text-sm gap-1">
          <p className="font-semibold">Impressum - Datenschutz</p>
          <p>
            Icons by
            <a href="https://icons8.de/" target="_blank">
              {" "}
              icons8.de
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center text-sm"></div>
      </div>
    </footer>
  );
};

export default Footer;
