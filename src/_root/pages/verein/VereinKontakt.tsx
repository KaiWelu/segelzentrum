const VereinKontakt = () => {
  return (
    <div className="content-wrapper">
      <section className="content-section">
        <h1>Kontakt Förderverein</h1>
        <p>
          Sie möchten das CVJM Freizeit- und Segelzentrum Ratzeburg
          unterstützen?
          <br />
          Ihr Unternehmen möchte sich als Sachmittelsponsor engagieren?
          <br />
          Sie haben Ideen, die uns helfen können?
        </p>
        <p>Dann wenden Sie sich bitte an:</p>
        <table className="border-separate border-spacing-y-4 border-0">
          <tbody>
            <tr>
              <td className="font-semibold pr-2 align-top">E-Mail</td>
              <td className="px-4">
                <a
                  href="mailto:info@cvjm-ratzeburg.de"
                  className="hover:text-primary-2 hover:font-semibold"
                >
                  info@foerderverein-segeln.de
                </a>
              </td>
            </tr>
            <tr>
              <td className="font-semibold pr-2 align-top">Website</td>
              <td className="px-4">
                <a
                  href="https://www.foerderverein-segeln.de/"
                  target="blank"
                  className="hover:text-primary-2 hover:font-semibold"
                >
                  foerderverein-segeln.de
                </a>
              </td>
            </tr>
            <tr>
              <td className="font-semibold pr-2 align-top">Spendenkonto</td>
              <td className="px-4">
                Evangelische Bank
                <br />
                IBAN: DE94 5206 0410 0006 4357 18
                <br />
                BIC: GENODEF1EK1
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default VereinKontakt;
