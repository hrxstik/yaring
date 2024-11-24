import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PricingInfo from '../components/PricingInfo';

interface Booking {
  id: number;
  phone_number: string;
  start_date: Date;
  end_date: Date;
}

const Booking: React.FC = () => {
  const [bookings, setBookings] = React.useState<Booking[]>([]);
  const [phoneNumber, setPhoneNumber] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchBookings = async () => {
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
    fetchBookings();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!phoneNumber) {
      setError('Пожалуйста, введите номер телефона.');
      return;
    }

    setError(null);

    // Example: Sending the phone number to your API
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone_number: phoneNumber }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Optionally, you can fetch the updated bookings list after submission
      const result = await response.json();
      setBookings(result); // Update bookings state if needed
      setPhoneNumber(''); // Clear the input field after submission
    } catch (error) {
      console.error('Submit error:', error);
      setError('Ошибка при отправке данных. Пожалуйста, попробуйте еще раз.');
    }
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="booking page grid grid-cols-2">
      <div>
        <h2 className="blue-block max-w-fit">Забронировать домик</h2>
        <Calendar />
      </div>
      <PricingInfo
        header="Треугольный домик 45 кв.м"
        info="
          На нашей территории находится четыре Треугольных домика
          A-Frame 45 кв.м. Домики совершенно одинаковые и отличаются только названиями: «Дубок», «Березка», «Рябинка», «Елочка». Наши лесные шале подходят для поездки одному, вдвоем, семьей или небольшой компанией до 4-х человек."
        price="7000"
        time="сутки"
        checkIn="14.00"
        checkOut="11.00"
        button={false}
      />
      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label htmlFor="phone" className="block mb-2">
            Номер телефона:
          </label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Введите номер телефона"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="mt-4 bg-blue-500 text-white rounded p-2">
          Забронировать
        </button>
      </form>
      <span></span>
      <p>
        Обратите внимание, что забронировать домик можно максимум на 2 дня и не ранее чем за 10 дней
      </p>
    </div>
  );
};

export default Booking;
