// src/components/atoms/NewButton/NewButton.test.jsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewButton from './NewButton';

describe('NewButton Component', () => {
  it('renders with the correct text', () => {
    render(<NewButton text="+ ADD ARTICLE" onClick={() => {}} variant="primary" />);
    
    const button = screen.getByRole('button', { name: '+ ADD ARTICLE' });
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const mockClick = vi.fn();
    
    render(<NewButton text="Click me" onClick={mockClick} variant="primary" />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('applies primary variant styles', () => {
    render(<NewButton text="Primary" onClick={() => {}} variant="primary" />);
    
    const button = screen.getByRole('button');
    // Check that it has a className (CSS Modules applied)
    expect(button).toHaveProperty('className');
    expect(button.className).toBeTruthy();
  });

  it('handles different text props', () => {
    render(<NewButton text="Different Text" onClick={() => {}} variant="primary" />);
    
    const button = screen.getByRole('button', { name: 'Different Text' });
    expect(button).toBeInTheDocument();
  });

  it('is focusable for accessibility', () => {
    render(<NewButton text="Focus me" onClick={() => {}} variant="primary" />);
    
    const button = screen.getByRole('button');
    button.focus();
    expect(document.activeElement).toBe(button);
  });
});