import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { google } from 'googleapis';

interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

const CalendarComponent = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEventsFromGoogleCalendar();
  }, []);

  const fetchEventsFromGoogleCalendar = async () => {
    const auth = new google.auth.OAuth2({
      clientId:
        '499834506345-b7773hqrojqehalohp6f287n1e949bpj.apps.googleusercontent.com',
      clientSecret: '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 ',
      redirectUri: 'https://dashgitt.vercel.app'
    });

    // Set access token obtained after authentication
    auth.setCredentials({
      access_token: 'USER_ACCESS_TOKEN'
    });

    const calendar = google.calendar({ version: 'v3', auth });
    const now = new Date();
    const minTime = new Date(now.getFullYear(), now.getMonth(), 1);
    const maxTime = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    try {
      const response = await calendar.events.list({
        calendarId: 'primary', // Replace with your calendar ID
        timeMin: minTime.toISOString(),
        timeMax: maxTime.toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime'
      });

      if (response.data.items) {
        const eventsData = response.data.items
          .map((event) => {
            const start = event.start?.dateTime;
            const end = event.end?.dateTime;
            if (start && end) {
              return {
                id: event.id!,
                title: event.summary!,
                start: new Date(start),
                end: new Date(end)
              };
            } else {
              // Handle case where start or end is undefined
              return null;
            }
          })
          .filter(Boolean) as Event[];

        setEvents(eventsData);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const localizer = momentLocalizer(moment);

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '50px' }}
      />
    </div>
  );
};

export default CalendarComponent;
