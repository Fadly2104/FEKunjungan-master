import React, { useCallback, useState, useMemo, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Calendar, Views, DateLocalizer } from 'react-big-calendar'
import DemoLink from './DemoLink.component'
import events from './events'

export default function TrialCalendar(){
interface Event {
    title: string;
    start: Date;
    end: Date;
    desc?: string;
  }
  
  interface TrialCalendar {
    localizer: DateLocalizer;
    dayLayoutAlgorithm?: string;
  }
  
  const TrialCalendar: React.FC<TrialCalendar> = ({
    localizer,
    dayLayoutAlgorithm = 'no-overlap',
  }) => {
    const [myEvents, setEvents] = useState<Event[]>(events);
  
    const handleSelectSlot = useCallback(({ start, end }: { start: Date; end: Date }) => {
      const title = window.prompt('New Event Name');
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }]);
      }
    }, [setEvents]);
  
    const handleSelectEvent = useCallback((event: Event) => window.alert(event.title), []);
  
    const { defaultDate, scrollToTime } = useMemo(
      () => ({
        defaultDate: new Date(2015, 3, 12),
        scrollToTime: new Date(1970, 1, 1, 6),
      }),
      []
    );
  
    return (
          <Calendar
            defaultDate={defaultDate}
            defaultView={Views.WEEK}
            events={myEvents}
            localizer={localizer}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            selectable
            scrollToTime={scrollToTime}
          />
    );
  };
  
  TrialCalendar.propTypes = {
    localizer: PropTypes.instanceOf(DateLocalizer),
    dayLayoutAlgorithm: PropTypes.string,
  };
}