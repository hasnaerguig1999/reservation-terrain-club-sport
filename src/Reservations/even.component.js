import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar as MobiscrollEventcalendar, Toast, setOptions, localeFr, getJson } from '@mobiscroll/react';
import moment from 'moment-timezone';
import '../newreservation.css';
import Calendar from 'react-calendar';


// Setup Mobiscroll Timezone plugin with Moment
moment.momentTimezone = moment;

export default function Even() {
  const [myEvents, setEvents] = React.useState([]);
  const [isToastOpen, setToastOpen] = React.useState(false);
  const [toastText, setToastText] = React.useState();
  // const invalids = [
  //   {
  //     start: '12:00',
  //     end: '13:00',
  //     title: 'Lunch break',
  //     type: 'lunch',
  //     recurring: {
  //       repeat: 'weekly',
  //       weekDays: 'MO,TU,WE,TH,FR'
  //     }
  //   }
  // ];

  React.useEffect(() => {
    getJson('https://trial.mobiscroll.com//workday-events/?vers=5', (events) => {
      setEvents(events);
    }, 'jsonp');
  
  
  }, []);
 

  const onEventCreateFailed = React.useCallback((event) => {
    if (event.invalid.type === 'lunch') {
      setToastText("Can't create this task on lunch break.");
      setToastOpen(true);
    }
  }, []);

  const onEventUpdateFailed = React.useCallback((event) => {
    if (event.invalid.type === 'lunch') {
      setToastText("Can't schedule this task on lunch break.");
      setToastOpen(true);
    }
  }, []);

  const view = React.useMemo(() => {
    return {
      schedule: {
        type: 'week',
        startDay: 1,
        endDay: 7,
        startTime: '07:00',
        endTime: '23:00'
      }
    };
  }, []);

  const closeToast = React.useCallback(() => {
    setToastOpen(false);
  }, []);

  return (
    <div>
      <MobiscrollEventcalendar
        theme="ios"
        themeVariant="light"
        locale={localeFr}
        dragToCreate={true}
        dragToMove={true}
        // invalid={invalids}
        data={myEvents}
        view={view}
        onEventCreateFailed={onEventCreateFailed}
        onEventUpdateFailed={onEventUpdateFailed}
      />
      <Toast
        theme="ios"
        themeVariant="light"
        message={toastText}
        isOpen={isToastOpen}
        onClose={closeToast}
      />
    </div>
  );
}
