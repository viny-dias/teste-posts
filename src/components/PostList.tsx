import { PostListProps } from '../types/PostListProps';
import PostItem from './PostItem';

const PostList = ({ posts, onEdit, onDelete }: PostListProps) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostList;