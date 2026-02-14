// src/components/molecules/ArticleCard/ArticleCard.test.jsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArticleCard from './ArticleCard';
import styles from './ArticleCard.module.css'; // Import styles!

// Mock the child components
vi.mock('../../atoms/Switch/Switch', () => ({
  default: ({ isOn, handleToggle }) => (
    <button 
      data-testid="mock-switch" 
      data-checked={isOn}
      onClick={handleToggle}
    >
      Switch
    </button>
  )
}));

vi.mock('../../atoms/OptionsMenu/OptionsMenu', () => ({
  default: ({ onEdit, onView, onDelete }) => (
    <div data-testid="mock-options-menu">
      <button data-testid="mock-edit" onClick={onEdit}>Edit</button>
      <button data-testid="mock-view" onClick={onView}>View</button>
      <button data-testid="mock-delete" onClick={onDelete}>Delete</button>
    </div>
  )
}));

// Mock the icon import
vi.mock('../../../../public/assets/icons/threeDots.png', () => ({
  default: 'three-dots-icon.png'
}));

describe('ArticleCard Component', () => {
  const mockArticle = {
    id: 1,
    headline: 'Test Article',
    author: 'John Doe',
    body: 'Test body content',
    publishedDate: '2024-01-01',
    published: true,
    isPublished: true
  };

  const defaultProps = {
    article: mockArticle,
    onPublishToggle: vi.fn(),
    onEdit: vi.fn(),
    onView: vi.fn(),
    onDelete: vi.fn()
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders article information correctly', () => {
    render(<ArticleCard {...defaultProps} />);
    
    expect(screen.getByText('Test Article')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('2024-01-01')).toBeInTheDocument();
  });

  it('renders the switch with correct published state', () => {
    render(<ArticleCard {...defaultProps} />);
    
    const switchElement = screen.getByTestId('mock-switch');
    expect(switchElement).toHaveAttribute('data-checked', 'true');
  });

  it('renders the three dots button', () => {
    render(<ArticleCard {...defaultProps} />);
    
    const threeDotsButton = screen.getByLabelText('Article menu');
    expect(threeDotsButton).toBeInTheDocument();
  });

  it('calls onView when card is clicked', async () => {
    const user = userEvent.setup();
    render(<ArticleCard {...defaultProps} />);
    
    const card = screen.getByText('Test Article').closest('div');
    await user.click(card);
    
    expect(defaultProps.onView).toHaveBeenCalledWith(mockArticle);
  });

  it('calls onPublishToggle when switch is clicked', async () => {
    const user = userEvent.setup();
    render(<ArticleCard {...defaultProps} />);
    
    const switchElement = screen.getByTestId('mock-switch');
    await user.click(switchElement);
    
    expect(defaultProps.onPublishToggle).toHaveBeenCalledWith(1, false);
  });

  it('opens options menu when three dots are clicked', async () => {
    const user = userEvent.setup();
    render(<ArticleCard {...defaultProps} />);
    
    // Menu should not be visible initially
    expect(screen.queryByTestId('mock-options-menu')).not.toBeInTheDocument();
    
    // Click three dots button
    const threeDotsButton = screen.getByLabelText('Article menu');
    await user.click(threeDotsButton);
    
    // Menu should now be visible
    await waitFor(() => {
      expect(screen.getByTestId('mock-options-menu')).toBeInTheDocument();
    });
  });

  it('calls onEdit when Edit option is clicked', async () => {
    const user = userEvent.setup();
    render(<ArticleCard {...defaultProps} />);
    
    // Open menu
    const threeDotsButton = screen.getByLabelText('Article menu');
    await user.click(threeDotsButton);
    
    // Click Edit option
    const editButton = await screen.findByTestId('mock-edit');
    await user.click(editButton);
    
    expect(defaultProps.onEdit).toHaveBeenCalledWith(mockArticle);
  });

  it('calls onView when View option is clicked', async () => {
    const user = userEvent.setup();
    render(<ArticleCard {...defaultProps} />);
    
    // Open menu
    const threeDotsButton = screen.getByLabelText('Article menu');
    await user.click(threeDotsButton);
    
    // Click View option
    const viewButton = await screen.findByTestId('mock-view');
    await user.click(viewButton);
    
    expect(defaultProps.onView).toHaveBeenCalledWith(mockArticle);
  });

  it('calls onDelete when Delete option is clicked', async () => {
    const user = userEvent.setup();
    render(<ArticleCard {...defaultProps} />);
    
    // Open menu
    const threeDotsButton = screen.getByLabelText('Article menu');
    await user.click(threeDotsButton);
    
    // Click Delete option
    const deleteButton = await screen.findByTestId('mock-delete');
    await user.click(deleteButton);
    
    expect(defaultProps.onDelete).toHaveBeenCalledWith(mockArticle);
  });

  it('closes menu when clicking outside', async () => {
    const user = userEvent.setup();
    render(<ArticleCard {...defaultProps} />);
    
    // Open menu
    const threeDotsButton = screen.getByLabelText('Article menu');
    await user.click(threeDotsButton);
    
    // Menu should be visible
    await waitFor(() => {
      expect(screen.getByTestId('mock-options-menu')).toBeInTheDocument();
    });
    
    // Click outside (on the document body)
    await user.click(document.body);
    
    // Menu should close
    await waitFor(() => {
      expect(screen.queryByTestId('mock-options-menu')).not.toBeInTheDocument();
    });
  });

  it('closes menu when an option is clicked', async () => {
    const user = userEvent.setup();
    render(<ArticleCard {...defaultProps} />);
    
    // Open menu
    const threeDotsButton = screen.getByLabelText('Article menu');
    await user.click(threeDotsButton);
    
    // Click Edit option
    const editButton = await screen.findByTestId('mock-edit');
    await user.click(editButton);
    
    // Menu should close
    await waitFor(() => {
      expect(screen.queryByTestId('mock-options-menu')).not.toBeInTheDocument();
    });
  });

  it('does not open view when clicking three dots button', async () => {
    const user = userEvent.setup();
    render(<ArticleCard {...defaultProps} />);
    
    const threeDotsButton = screen.getByLabelText('Article menu');
    await user.click(threeDotsButton);
    
    // onView should not be called
    expect(defaultProps.onView).not.toHaveBeenCalled();
  });

  it('does not open view when clicking switch', async () => {
    const user = userEvent.setup();
    render(<ArticleCard {...defaultProps} />);
    
    const switchElement = screen.getByTestId('mock-switch');
    await user.click(switchElement);
    
    // onView should not be called
    expect(defaultProps.onView).not.toHaveBeenCalled();
  });

  // FIXED TEST - using the imported styles object
  it('applies correct CSS class based on published status', () => {
    const { rerender } = render(<ArticleCard {...defaultProps} />);
    
    // Get the card element
    const card = screen.getByText('Test Article').closest('div');
    
    // Check that it has the published class from the styles object
    expect(card).toHaveClass(styles.published);
    
    // Rerender with unpublished article
    const unpublishedArticle = { ...mockArticle, published: false, isPublished: false };
    rerender(<ArticleCard {...defaultProps} article={unpublishedArticle} />);
    
    // Check that it has the draft class
    expect(card).toHaveClass(styles.draft);
    expect(card).not.toHaveClass(styles.published);
  });

  it('handles undefined callbacks gracefully', async () => {
    const user = userEvent.setup();
    const props = {
      article: mockArticle,
      onPublishToggle: undefined,
      onEdit: undefined,
      onView: undefined,
      onDelete: undefined
    };
    
    // Should not throw errors
    render(<ArticleCard {...props} />);
    
    // Click card
    const card = screen.getByText('Test Article').closest('div');
    await user.click(card); // Should not throw
    
    // Open menu
    const threeDotsButton = screen.getByLabelText('Article menu');
    await user.click(threeDotsButton);
    
    // Click menu options
    const editButton = await screen.findByTestId('mock-edit');
    await user.click(editButton); // Should not throw
  });
});