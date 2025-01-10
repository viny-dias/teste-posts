import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import { Post } from '../types/Post';

export function usePosts() {
    const query = useQuery<Post[]>({
      queryKey: ['posts'],
      queryFn: api.getPosts,
    });
  
    return {
      posts: query.data ?? [],
      isLoading: query.isLoading,
      error: query.error,
    };
}