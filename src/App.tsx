import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./_root/pages/RootLayout";
import Home from "./_root/pages/Home";
import Wassersport from "./_root/pages/Wassersport";
import Umgebung from "./_root/pages/Umgebung";
import Buchung from "./_root/pages/Buchung";
import Partner from "./_root/pages/Partner";
import NotFound from "./_root/pages/NotFound";
import UberUns from "./_root/pages/haus/UberUns";
import Ausstattung from "./_root/pages/haus/Ausstattung";
import Tagungen from "./_root/pages/haus/Tagungen";
import Anfahrt from "./_root/pages/haus/Anfahrt";
import Kontakt from "./_root/pages/haus/Kontakt";
import Webcam from "./_root/pages/haus/Webcam";
import Stellenangebote from "./_root/pages/haus/Stellenangebote";
import VereinUberUns from "./_root/pages/verein/VereinUberUns";
import VereinKontakt from "./_root/pages/verein/VereinKontakt";
import Ratzeburg from "./_root/pages/umgebung/Ratzeburg";
import Umland from "./_root/pages/umgebung/Umland";
import Lubeck from "./_root/pages/umgebung/Lubeck";
import UmgebungLinks from "./_root/pages/umgebung/UmgebungLinks";
import Preise from "./_root/pages/buchen/Preise";
import Belegung from "./_root/pages/buchen/Belegung";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        {/* "haus" menu routes */}
        <Route path="haus/uberuns" element={<UberUns />} />
        <Route path="haus/ausstattung" element={<Ausstattung />} />
        <Route path="haus/tagungen" element={<Tagungen />} />
        <Route path="haus/anfahrt" element={<Anfahrt />} />
        <Route path="haus/kontakt" element={<Kontakt />} />
        <Route path="haus/webcam" element={<Webcam />} />
        <Route path="haus/stellenangebote" element={<Stellenangebote />} />

        {/* "umgebung" menu routes */}
        <Route path="umgebung/ratzeburg" element={<Ratzeburg />} />
        <Route path="umgebung/umland" element={<Umland />} />
        <Route path="umgebung/lubeck" element={<Lubeck />} />
        <Route path="umgebung/links" element={<UmgebungLinks />} />

        {/* "buchen" menu routes */}
        <Route path="buchen/preise" element={<Preise />} />
        <Route path="buchen/belegungskalender" element={<Belegung />} />

        {/* "verein" menu routes */}
        <Route path="verein/uberuns" element={<VereinUberUns />} />
        <Route path="verein/kontakt" element={<VereinKontakt />} />

        <Route path="wassersport" element={<Wassersport />} />
        <Route path="umgebung" element={<Umgebung />} />
        <Route path="buchung" element={<Buchung />} />
        <Route path="partner" element={<Partner />} />
        <Route path="*" element={<NotFound />} />
        {/* this is the catch all 404 page */}
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
