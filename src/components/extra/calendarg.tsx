import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { google } from 'googleapis';
import { calendar_v3 } from 'googleapis/build/src/apis/calendar/v3';

interface Event {
  id: string;
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
}

const CalendarComponent = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEventsFromGoogleCalendar();
  }, []);

  const fetchEventsFromGoogleCalendar = async () => {
    const auth = new google.auth.OAuth2({
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
      redirectUri: 'YOUR_REDIRECT_URI'
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
        const eventsData = response.data.items.map(
          (event: calendar_v3.Schema$Event) => ({
            id: event.id!,
            summary: event.summary!,
            start: new Date(event.start!.dateTime!),
            end: new Date(event.end!.dateTime!)
          })
        );

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
