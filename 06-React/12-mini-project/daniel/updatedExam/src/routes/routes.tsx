import DogsGallery from "../pages/Gallery/DogsGallery";
import DogDiscussion from "../pages/DogDiscussion/DogDiscussion";
import { createBrowserRouter } from 'react-router-dom';
import NavbarWrapper from "../views/layouts/NavbarWrapper";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper />,
      children: [
        { path: "dogs-gallery", element: <DogsGallery /> },
        { path: "dog-discussion/:breedName", element: <DogDiscussion /> }
      ]
    }
  ]);