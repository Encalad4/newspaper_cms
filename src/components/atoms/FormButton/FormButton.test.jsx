// src/components/atoms/FormButton/FormButton.test.jsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormButton from './FormButton';
import styles from './FormButton.module.css';

describe('FormButton Component', () => {
  it('renders with children text', () => {
    render(<FormButton onClick={() => {}}>Save</FormButton>);
    
    const button = screen.getByRole('button', { name: 'Save' });
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const mockClick = vi.fn();
    
    render(<FormButton onClick={mockClick}>Click me</FormButton>);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('applies primary variant by default', () => {
    render(<FormButton onClick={() => {}}>Primary</FormButton>);
    
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass(styles.primary);
    expect(button).not.toBeDisabled();
  });

  it('applies delete variant correctly', () => {
    render(<FormButton variant="delete" onClick={() => {}}>Delete</FormButton>);
    
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass(styles.delete);
    expect(button).not.toHaveClass(styles.primary);
    expect(button).not.toBeDisabled();
  });

  it('applies disabled variant correctly', () => {
    render(<FormButton variant="disabled" onClick={() => {}}>Disabled</FormButton>);
    
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass(styles.disabled);
    expect(button).not.toHaveClass(styles.primary);
    expect(button).not.toHaveClass(styles.delete);
    expect(button).toBeDisabled();
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const mockClick = vi.fn();
    
    render(<FormButton variant="disabled" onClick={mockClick}>Disabled</FormButton>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    
    await user.click(button);
    expect(mockClick).not.toHaveBeenCalled();
  });

  it('renders with different button text', () => {
    const { rerender } = render(<FormButton onClick={() => {}}>Update</FormButton>);
    expect(screen.getByRole('button', { name: 'Update' })).toBeInTheDocument();
    
    rerender(<FormButton onClick={() => {}}>Cancel</FormButton>);
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('is focusable when not disabled', () => {
    render(<FormButton onClick={() => {}}>Focus me</FormButton>);
    
    const button = screen.getByRole('button');
    button.focus();
    expect(document.activeElement).toBe(button);
  });

  it('is not focusable when disabled', () => {
    render(<FormButton variant="disabled" onClick={() => {}}>Can\'t focus</FormButton>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    
    // Try to focus
    button.focus();
    expect(document.activeElement).not.toBe(button);
  });
});