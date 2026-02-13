// src/components/atoms/SearchBar/SearchBar.test.jsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
import styles from './SearchBar.module.css';

describe('SearchBar Component', () => {
  it('renders with default placeholder', () => {
    render(<SearchBar onChange={() => {}} value="" />);
    
    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renders with custom placeholder', () => {
    render(<SearchBar placeholder="Find articles..." onChange={() => {}} value="" />);
    
    const input = screen.getByPlaceholderText('Find articles...');
    expect(input).toBeInTheDocument();
  });

  it('displays the provided value', () => {
    render(<SearchBar onChange={() => {}} value="React testing" />);
    
    const input = screen.getByPlaceholderText('Search');
    expect(input).toHaveValue('React testing');
  });

  it('calls onChange when user types', async () => {
    const user = userEvent.setup();
    const mockOnChange = vi.fn();
    
    render(<SearchBar onChange={mockOnChange} value="" />);
    
    const input = screen.getByPlaceholderText('Search');
    await user.type(input, 'hello');
    
    expect(mockOnChange).toHaveBeenCalledTimes(5); // Called for each character
  });

  it('renders the search icon', () => {
    render(<SearchBar onChange={() => {}} value="" />);
    
    const icon = screen.getByAltText('Search');
    expect(icon).toBeInTheDocument();
    expect(icon.tagName).toBe('IMG');
  });

  it('applies the correct CSS classes', () => {
    render(<SearchBar onChange={() => {}} value="" />);
    
    const container = document.querySelector(`.${styles.searchContainer}`);
    const input = document.querySelector(`.${styles.searchInput}`);
    const icon = document.querySelector(`.${styles.searchIcon}`);
    
    expect(container).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('input is focusable for accessibility', () => {
    render(<SearchBar onChange={() => {}} value="" />);
    
    const input = screen.getByPlaceholderText('Search');
    input.focus();
    expect(document.activeElement).toBe(input);
  });

  it('handles empty value prop', () => {
    render(<SearchBar onChange={() => {}} value={undefined} />);
    
    const input = screen.getByPlaceholderText('Search');
    expect(input).toHaveValue('');
  });
});