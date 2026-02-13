// src/components/atoms/OptionsMenu/OptionsMenu.test.jsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OptionsMenu from './OptionsMenu';
import styles from './OptionsMenu.module.css'; // Add this import!

describe('OptionsMenu Component', () => {
  it('renders all three options', () => {
    render(<OptionsMenu onEdit={() => {}} onView={() => {}} onDelete={() => {}} />);
    
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('View')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('renders all three icons', () => {
    render(<OptionsMenu onEdit={() => {}} onView={() => {}} onDelete={() => {}} />);
    
    const editIcon = screen.getByAltText('Edit');
    const viewIcon = screen.getByAltText('View');
    const deleteIcon = screen.getByAltText('Delete');
    
    expect(editIcon).toBeInTheDocument();
    expect(viewIcon).toBeInTheDocument();
    expect(deleteIcon).toBeInTheDocument();
    
    expect(editIcon.tagName).toBe('IMG');
    expect(viewIcon.tagName).toBe('IMG');
    expect(deleteIcon.tagName).toBe('IMG');
  });

  it('calls onEdit when Edit button is clicked', async () => {
    const user = userEvent.setup();
    const mockEdit = vi.fn();
    const mockView = vi.fn();
    const mockDelete = vi.fn();
    
    render(
      <OptionsMenu 
        onEdit={mockEdit} 
        onView={mockView} 
        onDelete={mockDelete} 
      />
    );
    
    const editButton = screen.getByText('Edit');
    await user.click(editButton);
    
    expect(mockEdit).toHaveBeenCalledTimes(1);
    expect(mockView).not.toHaveBeenCalled();
    expect(mockDelete).not.toHaveBeenCalled();
  });

  it('calls onView when View button is clicked', async () => {
    const user = userEvent.setup();
    const mockEdit = vi.fn();
    const mockView = vi.fn();
    const mockDelete = vi.fn();
    
    render(
      <OptionsMenu 
        onEdit={mockEdit} 
        onView={mockView} 
        onDelete={mockDelete} 
      />
    );
    
    const viewButton = screen.getByText('View');
    await user.click(viewButton);
    
    expect(mockView).toHaveBeenCalledTimes(1);
    expect(mockEdit).not.toHaveBeenCalled();
    expect(mockDelete).not.toHaveBeenCalled();
  });

  it('calls onDelete when Delete button is clicked', async () => {
    const user = userEvent.setup();
    const mockEdit = vi.fn();
    const mockView = vi.fn();
    const mockDelete = vi.fn();
    
    render(
      <OptionsMenu 
        onEdit={mockEdit} 
        onView={mockView} 
        onDelete={mockDelete} 
      />
    );
    
    const deleteButton = screen.getByText('Delete');
    await user.click(deleteButton);
    
    expect(mockDelete).toHaveBeenCalledTimes(1);
    expect(mockEdit).not.toHaveBeenCalled();
    expect(mockView).not.toHaveBeenCalled();
  });


  it('applies deleteItem class to Delete button', () => {
    render(<OptionsMenu onEdit={() => {}} onView={() => {}} onDelete={() => {}} />);
    
    const deleteButton = screen.getByText('Delete').closest('button');
    
    // Check that it has the deleteItem class
    expect(deleteButton).toHaveClass(styles.deleteItem);
    
    // Edit and View should not have deleteItem class
    const editButton = screen.getByText('Edit').closest('button');
    const viewButton = screen.getByText('View').closest('button');
    
    expect(editButton).not.toHaveClass(styles.deleteItem);
    expect(viewButton).not.toHaveClass(styles.deleteItem);
  });

  it('maintains correct button order (Edit, View, Delete)', () => {
    render(<OptionsMenu onEdit={() => {}} onView={() => {}} onDelete={() => {}} />);
    
    const buttons = screen.getAllByRole('button');
    
    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toHaveTextContent('Edit');
    expect(buttons[1]).toHaveTextContent('View');
    expect(buttons[2]).toHaveTextContent('Delete');
  });
});