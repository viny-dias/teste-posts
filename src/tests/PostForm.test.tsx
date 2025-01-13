import { render, screen, waitFor } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach  } from 'vitest'
import PostForm from '../components/PostForm'
import userEvent from '@testing-library/user-event'
 

describe('PostForm', () => {
  // Mocks das props
  const mockOnSubmit = vi.fn()
  const mockOnEdit = vi.fn()
  const mockSetEditingPost = vi.fn()

  // Reset dos mocks antes de cada teste
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('renderiza o formulário corretamente', () => {
    render(
      <PostForm 
        onSubmit={mockOnSubmit}
        onEdit={mockOnEdit}
        setEditingPost={mockSetEditingPost}
        editingPost={null}
      />
    )

    // Verifica se os elementos básicos estão presentes
    expect(screen.getByLabelText(/Título/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Conteúdo/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Criar/i })).toBeInTheDocument()
  })

  test('mostra botão de atualizar quando está editando', () => {
    const mockEditingPost = {
      id: 1,
      title: 'Post Teste',
      content: 'Conteúdo teste'
    }

    render(
      <PostForm 
        onSubmit={mockOnSubmit}
        onEdit={mockOnEdit}
        editingPost={mockEditingPost}
        setEditingPost={mockSetEditingPost}
      />
    )

    expect(screen.getByRole('button', { name: /Atualizar/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Cancelar/i })).toBeInTheDocument()
  })

  test('preenche o formulário com dados do post em edição', () => {
    const mockEditingPost = {
      id: 1,
      title: 'Post Teste',
      content: 'Conteúdo teste'
    }

    render(
      <PostForm 
        onSubmit={mockOnSubmit}
        onEdit={mockOnEdit}
        editingPost={mockEditingPost}
        setEditingPost={mockSetEditingPost}
      />
    )

    expect(screen.getByLabelText(/Título/i)).toHaveValue('Post Teste')
    expect(screen.getByLabelText(/Conteúdo/i)).toHaveValue('Conteúdo teste')
  })

  test('chama onSubmit com dados corretos ao criar novo post', async () => {
    render(
      <PostForm 
        onSubmit={mockOnSubmit}
        onEdit={mockOnEdit}
        setEditingPost={mockSetEditingPost}
        editingPost={null}
      />
    )

    const titleInput = screen.getByLabelText(/Título/i)
    const contentInput = screen.getByLabelText(/Conteúdo/i)
    const submitButton = screen.getByRole('button', { name: /Criar/i })

    await userEvent.type(titleInput, 'Novo Post')
    await userEvent.type(contentInput, 'Novo Conteúdo')
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(
        'Novo Post',
        'Novo Conteúdo'
      )
    })
  })
})