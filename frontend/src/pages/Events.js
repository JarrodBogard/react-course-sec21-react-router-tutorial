import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData();
  const { events } = data;

  // const {events} = useLoaderData()

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  // const events = data.events;
  // return <EventsList events={events} />;
  // return <EventsList events={data} />;
  // return <EventsList />;
};

export default EventsPage;

async function loadData() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "Could not fetch data." };
    // throw new Error("Could not fetch events.")
    // throw { message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ message: "Could not fetch data." }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch data." },
      {
        status: 500,
      }
    );
  } else {
    // const resData = await response.json();
    // return resData.events;
    // const res = new Response("some data", {status: 201});
    // return res
    // return response;
    const responseData = await response.json();
    return responseData.events;
  }
}

export function loader() {
  return defer({
    events: loadData(),
  });
}
