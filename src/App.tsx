import { PostManager } from './components/PostManager';
import { Toaster } from './components/ui/toast/toaster';

export function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Gerenciador de Posts
      </h1>
      <PostManager />
    </div>
    <Toaster />
    </>
  );
}
