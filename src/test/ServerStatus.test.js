import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Correct import for jest-dom
import ServerStatus from '../components/ServerStatus';
import { fetchServerStatus } from '../utils/serverStatus';

// Mock the fetchServerStatus function
jest.mock('../utils/serverStatus', () => ({
  fetchServerStatus: jest.fn(),
}));

test('displays "Server is running" when the server is running', async () => {
  fetchServerStatus.mockResolvedValue(true);

  render(<ServerStatus />);

  await waitFor(() => expect(screen.getByText('Server is running')).toBeInTheDocument());
});

test('displays "Server is not running" when the server is not running', async () => {
  fetchServerStatus.mockResolvedValue(false);

  render(<ServerStatus />);

  await waitFor(() => expect(screen.getByText('Server is not running')).toBeInTheDocument());
});
