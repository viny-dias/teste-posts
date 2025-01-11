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
      onMutate: async (newPost) => {
        await queryClient.cancelQueries({ queryKey: ['posts'] });
        
        const previousPosts = queryClient.getQueryData<Post[]>(['posts']);
        
        queryClient.setQueryData<Post[]>(['posts'], (old = []) => [
          {
            id: Math.random(),
            title: newPost.title,
            content: newPost.body,
          },
          ...old,
        ]);
  
        return { previousPosts };
      },
      onError: (_, __, context) => {
        queryClient.setQueryData(['posts'], context?.previousPosts);
      },
    });
  
    const updatePost = useMutation({
      mutationFn: ({ id, data }: { id: number; data: { title: string; body: string } }) =>
        api.updatePost(id, data),
      onMutate: async ({ id, data }) => {
        await queryClient.cancelQueries({ queryKey: ['posts'] });
        
        const previousPosts = queryClient.getQueryData<Post[]>(['posts']);
        
        queryClient.setQueryData<Post[]>(['posts'], (old = []) =>
          old.map((post) =>
            post.id === id
              ? { ...post, title: data.title, body: data.body }
              : post
          )
        );
  
        return { previousPosts };
      },
      onError: (_, __, context) => {
        queryClient.setQueryData(['posts'], context?.previousPosts);
      },
    });
  
    const deletePost = useMutation({
      mutationFn: (id: number) => api.deletePost(id),
      onMutate: async (postId) => {
        await queryClient.cancelQueries({ queryKey: ['posts'] });
        
        const previousPosts = queryClient.getQueryData<Post[]>(['posts']);
        
        queryClient.setQueryData<Post[]>(['posts'], (old = []) =>
          old.filter((post) => post.id !== postId)
        );
  
        return { previousPosts };
      },
      onError: (_, __, context) => {
        queryClient.setQueryData(['posts'], context?.previousPosts);
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