import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./_root/pages/RootLayout";
import Home from "./_root/pages/Home";
import Haus from "./_root/pages/Haus";
import Wassersport from "./_root/pages/Wassersport";
import Umgebung from "./_root/pages/Umgebung";
import Buchung from "./_root/pages/Buchung";
import Verein from "./_root/pages/Verein";
import Partner from "./_root/pages/Partner";
import NotFound from "./_root/pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="haus" element={<Haus />} />
      <Route path="wassersport" element={<Wassersport />} />
      <Route path="umgebung" element={<Umgebung />} />
      <Route path="buchung" element={<Buchung />} />
      <Route path="verein" element={<Verein />} />
      <Route path="partner" element={<Partner />} />
      {/* this is the catch all 404 page */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
