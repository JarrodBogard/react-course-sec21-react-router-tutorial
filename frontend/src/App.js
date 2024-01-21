import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailsPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetails";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import { action as handleEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-details",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailsPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: handleEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: handleEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import HomePage from "./pages/Home";
// import EventsPage, { loader as eventsLoader } from "./pages/Events";
// import EventDetailsPage, {
//   loader as eventDetailsLoader,
//   action as deleteEventAction,
// } from "./pages/EventDetails";
// import NewEventPage from "./pages/NewEvent";
// // import NewEventPage, { action as newEventAction } from "./pages/NewEvent";
// import EditEventPage from "./pages/EditEvent";
// import ErrorPage from "./pages/ErrorPage";
// import RootLayout from "./pages/Root";
// import EventsRootLayout from "./pages/EventsRoot";
// import { action as handleEventAction } from "./components/EventForm";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       // { path: "", element: <HomePage /> }, alt option to index: true
//       { index: true, element: <HomePage /> },
//       {
//         path: "events",
//         element: <EventsRootLayout />,
//         children: [
//           {
//             index: true,
//             element: <EventsPage />,
//             loader: eventsLoader,
//           },
//           {
//             path: ":eventId",
//             id: "event-details",
//             loader: eventDetailsLoader,
//             children: [
//               {
//                 index: true,
//                 element: <EventDetailsPage />,
//                 action: deleteEventAction,
//               },
//               {
//                 path: "edit",
//                 element: <EditEventPage />,
//                 action: handleEventAction,
//               },
//             ],
//           },
//           { path: "new", element: <NewEventPage />, action: handleEventAction },
//         ],
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
