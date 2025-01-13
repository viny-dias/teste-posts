// @ts-nocheck
import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import { PostManager } from '../components/PostManager'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Cria os mocks
const mockQuery = vi.fn()
const mockMutation = vi.fn() 

// Mock dos módulos
vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query')
  return {
    ...actual,
    useQuery: () => mockQuery(),
    useMutation: () => ({ mutateAsync: mockMutation })
  }
})

vi.mock('../../components/ui/toast/use-toast', () => ({
  useToast: () => ({ toast: vi.fn() })
}))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
)

describe('PostManager', () => {
  test('renderiza estado de carregamento', () => {
    mockQuery.mockReturnValue({
      data: [],
      isLoading: true,
      error: null
    })

    render(<PostManager />, { wrapper })
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('renderiza estado de erro', () => {
    mockQuery.mockReturnValue({
      data: [],
      isLoading: false,
      error: new Error('Erro de teste')
    })

    render(<PostManager />, { wrapper })
    expect(screen.getByText('Erro ao carregar posts')).toBeInTheDocument()
  })

  test('renderiza lista de posts', () => {
    const mockPosts = [
      { id: 1, title: 'Post 1', content: 'Conteúdo 1' },
      { id: 2, title: 'Post 2', content: 'Conteúdo 2' }
    ]

    mockQuery.mockReturnValue({
      data: mockPosts,
      isLoading: false,
      error: null
    })

    render(<PostManager />, { wrapper })
    expect(screen.getByText('Post 1')).toBeInTheDocument()
    expect(screen.getByText('Post 2')).toBeInTheDocument()
  })
})