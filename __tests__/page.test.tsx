import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

describe('Home page', () => {
  it('renders the Next.js logo', () => {
    render(<Home />);
    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
  });

  it('shows the edit instruction', () => {
    render(<Home />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
    expect(screen.getByText(/app\/page\.tsx/i)).toBeInTheDocument();
  });

  it('renders the Deploy now button', () => {
    render(<Home />);
    expect(screen.getByText('Deploy now')).toBeInTheDocument();
  });

  it('renders the Learn and Examples links', () => {
    render(<Home />);
    expect(screen.getByText('Learn')).toBeInTheDocument();
    expect(screen.getByText('Examples')).toBeInTheDocument();
  });
});
