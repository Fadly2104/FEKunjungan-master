import moment from "moment";
import Calendar from "../Calendar";

const events = [
  {
    start: moment("2023-10-27T10:00:00").toDate(),
    end: moment("2023-10-27T11:00:00").toDate(),
    title: "Anton Szandor LaVey",
    data: {
      type: "Reg",
    },
  },
  {
    start: moment("2023-10-27T14:00:00").toDate(),
    end: moment("2023-10-27T15:30:00").toDate(),
    title: "Jojo",
    data: {
      type: "App",
    },
  },
  {
    start: moment("2023-10-30T22:00:00").toDate(),
    end: moment("2023-10-30T23:59:00").toDate(),
    title: "Diavolo",
    data: {
      type: "App",
    },
  },
];

const components = {
  event: (props: any) => {
    const eventType = props?.event?.data?.type;
    switch (eventType) {
      case "Reg":
        return (
          <div style={{ background: "orange", color: "white", height: "100%" }}>
            {props.title}
          </div>
        );
      case "App":
        return (
          <div
            style={{ background: "darkblue", color: "white", height: "100%" }}
          >
            {props.title}
          </div>
        );
      default:
        return null;
    }
  },
};

export default function ControlCalendar() {
  return <Calendar events={events} components={components} />;
}
