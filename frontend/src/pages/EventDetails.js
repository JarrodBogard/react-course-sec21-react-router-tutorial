import EventItem from "../components/EventItem";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventDetailsPage = () => {
  // const data = useRouteLoaderData("event-details");
  const { event, events } = useRouteLoaderData("event-details");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
      {/* <EventItem event={data.event} /> */}
    </>
  );
};

export default EventDetailsPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for event." },
      { status: 500 }
    );
  } else {
    // return response;
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json(
      { message: "Could not fetch data." },
      {
        status: 500,
      }
    );
  } else {
    const responseData = await response.json();
    return responseData.events;
  }
}

export const loader = async ({ params }) => {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
};

export async function action({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
}
