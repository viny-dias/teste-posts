import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import PostItem from '../components/PostItem'

describe('PostItem', () => { 
  const mockPost = {
    id: 1,
    title: 'Test Title',
    content: 'Test Content'
  }  

  test('renders post content correctly', () => {
    render(
      <PostItem
        post={mockPost}
        onEdit={() => {}}
        onDelete={() => {}} 
      />
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})