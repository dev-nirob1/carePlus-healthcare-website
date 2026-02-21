import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ServicesPage from "../Pages/ServicesPage";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import DoctorsPage from "../Pages/DoctorsPage";
import AppointmentsPage from "../Pages/AppointmentsPage";
import ContactPage from "../Pages/ContactPage";

export const front_routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "services/:slug", element: <ServiceDetailsPage /> },
      { path: "doctors", element: <DoctorsPage /> },
      { path: "appointments", element: <AppointmentsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
];
