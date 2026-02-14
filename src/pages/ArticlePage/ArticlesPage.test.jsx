// src/pages/ArticlePage/ArticlesPage.test.jsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArticlesPage from './ArticlePage';

// Mock the child components
vi.mock('../../components/organisms/SideBar/SideBar', () => ({
  default: () => <div data-testid="mock-sidebar">Sidebar Mock</div>
}));

vi.mock('../../components/organisms/ArticleManagementContainer/ArticleManagementContainer', () => ({
  default: ({ onAddArticle, onUpdateArticle, onDeleteArticle, onPublishToggle }) => (
    <div data-testid="mock-article-management">
      <button 
        data-testid="mock-add-article"
        onClick={() => onAddArticle({ 
          id: Date.now(), 
          headline: 'New Article', 
          author: 'Test Author',
          body: 'Test Body',
          publishedDate: '2024-01-01',
          published: false 
        })}
      >
        Add Article
      </button>
      <button 
        data-testid="mock-update-article"
        onClick={() => onUpdateArticle({ 
          id: 1, 
          headline: 'Updated Article', 
          author: 'Updated Author',
          body: 'Updated Body',
          publishedDate: '2024-01-02',
          published: true 
        })}
      >
        Update Article
      </button>
      <button 
        data-testid="mock-delete-article"
        onClick={() => onDeleteArticle(1)}
      >
        Delete Article
      </button>
      <button 
        data-testid="mock-publish-toggle"
        onClick={() => onPublishToggle(1, true)}
      >
        Toggle Publish
      </button>
    </div>
  )
}));

vi.mock('../../components/atoms/Notification/Notification', () => ({
  default: ({ message, type, onClose }) => (
    <div data-testid="mock-notification" data-type={type}>
      <span>{message}</span>
      <button onClick={onClose} data-testid="close-notification">Close</button>
    </div>
  )
}));

describe('ArticlesPage', () => {
  const defaultProps = {
    onPageChange: vi.fn(),
    currentPage: 'Dashboard'
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<ArticlesPage {...defaultProps} />);
    expect(screen.getByTestId('mock-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('mock-article-management')).toBeInTheDocument();
  });

  it('shows notification when article is added', async () => {
    const user = userEvent.setup();
    render(<ArticlesPage {...defaultProps} />);
    
    const addButton = screen.getByTestId('mock-add-article');
    await user.click(addButton);
    
    await waitFor(() => {
      expect(screen.getByTestId('mock-notification')).toBeInTheDocument();
    });
    
    const notification = screen.getByTestId('mock-notification');
    expect(notification).toHaveTextContent('Article created successfully');
    expect(notification).toHaveAttribute('data-type', 'success');
  });

  it('shows notification when article is updated', async () => {
    const user = userEvent.setup();
    render(<ArticlesPage {...defaultProps} />);
    
    const updateButton = screen.getByTestId('mock-update-article');
    await user.click(updateButton);
    
    await waitFor(() => {
      expect(screen.getByTestId('mock-notification')).toBeInTheDocument();
    });
    
    const notification = screen.getByTestId('mock-notification');
    expect(notification).toHaveTextContent('Article updated successfully');
  });

  it('shows notification when article is deleted', async () => {
    const user = userEvent.setup();
    render(<ArticlesPage {...defaultProps} />);
    
    const deleteButton = screen.getByTestId('mock-delete-article');
    await user.click(deleteButton);
    
    await waitFor(() => {
      expect(screen.getByTestId('mock-notification')).toBeInTheDocument();
    });
    
    const notification = screen.getByTestId('mock-notification');
    expect(notification).toHaveTextContent('Article deleted successfully');
  });

  it('shows notification when publish status is toggled', async () => {
    const user = userEvent.setup();
    render(<ArticlesPage {...defaultProps} />);
    
    const toggleButton = screen.getByTestId('mock-publish-toggle');
    await user.click(toggleButton);
    
    await waitFor(() => {
      expect(screen.getByTestId('mock-notification')).toBeInTheDocument();
    });
    
    const notification = screen.getByTestId('mock-notification');
    expect(notification).toHaveTextContent('Article status updated successfully');
  });

  it('closes notification when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<ArticlesPage {...defaultProps} />);
    
    const addButton = screen.getByTestId('mock-add-article');
    await user.click(addButton);
    
    await waitFor(() => {
      expect(screen.getByTestId('mock-notification')).toBeInTheDocument();
    });
    
    const closeButton = screen.getByTestId('close-notification');
    await user.click(closeButton);
    
    await waitFor(() => {
      expect(screen.queryByTestId('mock-notification')).not.toBeInTheDocument();
    });
  });
});