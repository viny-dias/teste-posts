// src/hooks/usePosts.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../services/api';
import { Post } from '../types/Post';

export function usePosts() {
  const queryClient = useQueryClient();

  const query = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: api.getPosts,
  });

  const createPost = useMutation({
    mutationFn: (data: { title: string; body: string }) => api.createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const updatePost = useMutation({
    mutationFn: ({ id, data }: { id: number; data: { title: string; body: string } }) =>
      api.updatePost(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const deletePost = useMutation({
    mutationFn: (id: number) => api.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return {
    posts: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
    createPost,
    updatePost,
    deletePost,
  };
}