import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders portfolio page', async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getAllByText(/Hangsovoleak/i).length).toBeGreaterThan(0);
  });
});
