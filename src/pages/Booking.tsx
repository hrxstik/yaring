import React from 'react';

interface Booking {
  id: number;
  phone_number: string;
  start_date: Date;
  end_date: Date;
}

const Booking: React.FC = () => {
  const [bookings, setBookings] = React.useState<Booking[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookings');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setBookings(result);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, []);

  return <div className="booking page">{bookings.map((item) => null)}</div>;
};

export default Booking;
