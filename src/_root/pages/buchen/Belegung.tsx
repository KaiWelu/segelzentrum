const Belegung = () => {
  return (
    <div className="content-wrapper">
      <section className="content-section">
        <h1>Buchen</h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col items-start mt-4">
            <p>Ihre Anfragen und Buchungen richten Sie bitte an:</p>
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
          <div className="">
            <iframe
              width="600"
              height="800"
              src="https://www.gruppenhaus.de/showplan.php?hs=1579"
              className=" h-[800px]  lg:w-[600px] max-w-fit lg:max-w-full sm:max-w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Belegung;
