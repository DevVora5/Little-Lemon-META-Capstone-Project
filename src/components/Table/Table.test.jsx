import { render, screen } from '@testing-library/react';

import { Table } from './Table';

const columns = [
  {
    id: 1,
    name: 'booking_id',
    label: 'BOOKING_ID',
  },
  {
    id: 2,
    name: 'firstName',
    label: 'FIRSTNAME',
  },
  {
    id: 3,
    name: 'lastName',
    label: 'LASTNAME',
  },
  {
    id: 4,
    name: 'bookingDate',
    label: 'BOOKINGDATE',
  },
  {
    id: 5,
    name: 'bookingTime',
    label: 'BOOKINGTIME',
  },
  {
    id: 6,
    name: 'guests',
    label: 'GUESTS',
  },
  {
    id: 7,
    name: 'occasion',
    label: 'OCCASION',
  },
];

const rows = [
  {
    booking_id: '637533c7fac07',
    firstName: 'Dev',
    lastName: 'Vora',
    bookingDate: '2024-02-03',
    bookingTime: '18:00',
    guests: 2,
    occasion: 'anniversary',
  },
];

describe('components/Table', () => {
  window.scrollTo = jest.fn();
  describe('<Table />', () => {
    it('Renders Table to the DOM', () => {
      render(<Table rows={rows} columns={columns} />);
      const tableEl = screen.getByRole('table');
      expect(tableEl).toBeInTheDocument();
    });
  });
});
