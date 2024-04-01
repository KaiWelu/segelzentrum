const Kontakt = () => {
  return (
    <div className="content-wrapper">
      <section className="content-section">
        <h1>Kontakt</h1>
        <p>
          Sie möchten eine Freizeit bei uns buchen? <br /> Sie haben Fragen zu
          unseren Angeboten oder zu Ihrer Buchung? <br /> Nehmen Sie mit uns
          Kontakt auf - wir beraten Sie gerne!
        </p>
        <div className="flex flex-col items-start mt-4">
          <table className="border-separate border-spacing-y-4 border-0">
            <tbody>
              <tr>
                <td className="font-semibold pr-2 align-top">Anschrift</td>
                <td className="px-4">
                  CVJM Freizeit- und Segelzentrum RZ gGmbH <br />
                  Domhof 36 <br />
                  23909 Ratzeburg
                </td>
              </tr>
              <tr>
                <td className="font-semibold pr-2 align-top">Telefon</td>
                <td className="px-4">04541/89906-0</td>
              </tr>
              <tr>
                <td className="font-semibold pr-2 align-top">Fax</td>
                <td className="px-4">04541/89906-22</td>
              </tr>
              <tr>
                <td className="font-semibold pr-2 align-top">E-Mail</td>
                <td className="px-4">
                  <a
                    href="mailto:info@cvjm-ratzeburg.de"
                    className="hover:text-primary-2 hover:font-semibold"
                  >
                    info@cvjm-ratzeburg.de
                  </a>
                </td>
              </tr>
              <tr>
                <td className="font-semibold pr-2 align-top">Bürozeiten</td>
                <td className="px-4">
                  Montag - Freitag <br />
                  8:45 Uhr - 12:00 Uhr
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
