import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Home/Home";
import AddSpost from "../Pages/AddSpost";
import Login from "../UsersAuthorize/Login";
import Register from "../UsersAuthorize/Register";
import PrivateRoute from "../../Private/PrivateRoute";
import AllSpotsContainer from "../Pages/AllSpotsContainer";
import TouristDetails from "../TouristSpot/TouristDetails";
import AllSpotDetails from "../Pages/AllSpotDetails";
import MyList from "../Pages/MyList";
import UpdateSpot from "../Pages/UpdateSpot";
import CountryMacth from "../CountrySections/CountryMacth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allspots",
        element: <AllSpotsContainer />,
      },
      {
        path: "/allspots/:id",
        element: (
          <PrivateRoute>
            <AllSpotDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/addspot",
        element: (
          <PrivateRoute>
            <AddSpost />,
          </PrivateRoute>
        ),
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/touristspots/:id",
        element: (
          <PrivateRoute>
            <TouristDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "/bycoutryname/:countryname",
        element: <CountryMacth />,
      },
    ],
  },
]);

export default router;
