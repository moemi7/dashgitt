import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { google } from 'googleapis';

const Calendarg = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEventsFromGoogleCalendar();
  }, []);

  const fetchEventsFromGoogleCalendar = async () => {
    const auth = new google.auth.OAuth2({
      clientId:
        '499834506345-b7773hqrojqehalohp6f287n1e949bpj.apps.googleusercontent.com',
      clientSecret: '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',
      redirectUri: 'dashgitt.vercel.app'
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

      const eventsData = response.data.items.map((event) => ({
        id: event.id,
        title: event.summary,
        start: new Date(event.start.dateTime),
        end: new Date(event.end.dateTime)
      }));

      setEvents(eventsData);
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

export default Calendarg;
