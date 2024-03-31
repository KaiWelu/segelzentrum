const Anfahrt = () => {
  return (
    <div className="content-wrapper">
      <section className="content-section">
        <h1>Anfahrt</h1>
        <p>
          Ratzeburg liegt zentral zwischen den Städten Hamburg, Lübeck, Berlin,
          Schwerin und Lüneburg. Das CVJM Freizeit- und Segelzentrum Ratzeburg
          selbst liegt am Westufer der Dominsel in unmittelbarer Nähe zum Dom.
          Folgen Sie daher in Ratzeburg den Hinweisschildern in Richtung Dom.
        </p>
        <p>
          Die passende Bahnverbindung können Sie auf den Webseiten der Deutschen
          Bahn AG (bahn.de) oder des Hamburger Verkehrsverbundes (hvv.de)
          abrufen.
        </p>
        <div className="md:p-2 mt-4">
          <iframe
            className="w-full h-80"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=CVJM-Freizeit%20und%20Segelzentrum%20Ratzeburg%20gemeinn%C3%BCtzige%20GmbH%20Berlin+(CVJM-Freizeit%20und%20Segelzentrum%20Ratzeburg%20gemeinn%C3%BCtzige%20GmbH)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=db4b7973a24d9318dbd965e5df06a7f489f39218"
          ></script>
        </div>
      </section>
    </div>
  );
};

export default Anfahrt;
