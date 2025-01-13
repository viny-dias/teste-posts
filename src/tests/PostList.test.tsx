import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import PostList from '../components/PostList' 

describe('PostList', () => {
  // Mock de dados para teste 
  const mockPosts = [
    { id: 1, title: 'Post 1', content: 'Conteúdo do post 1' },
    { id: 2, title: 'Post 2', content: 'Conteúdo do post 2' }
  ]

  test('Renders a list of posts correctly', () => {
    const mockOnEdit = vi.fn()  
    const mockOnDelete = vi.fn()

    render(
      <PostList 
        posts={mockPosts}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    )

    // Verifica se os títulos dos posts estão sendo renderizados
    expect(screen.getByText('Post 1')).toBeInTheDocument()
    expect(screen.getByText('Post 2')).toBeInTheDocument()
    
    // Verifica se os conteúdos dos posts estão sendo renderizados
    expect(screen.getByText('Conteúdo do post 1')).toBeInTheDocument()
    expect(screen.getByText('Conteúdo do post 2')).toBeInTheDocument()
  })

  test('Render message when there are no posts', () => {
    const mockOnEdit = vi.fn()
    const mockOnDelete = vi.fn()

    render(
      <PostList 
        posts={[]}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    )

    expect(screen.queryByText(/Post \d/)).not.toBeInTheDocument()
  })
})