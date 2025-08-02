import { useAuth } from '@/hooks/useAuth';
import { Header } from '@/components/layout/Header';
import { ProductGrid } from '@/components/products/ProductGrid';
import { AuthPage } from '@/components/auth/AuthPage';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Show admin dashboard for admin user
  if (isAdmin) {
    return <AdminDashboard />;
  }

  // Show auth page if not logged in
  if (!user) {
    return <AuthPage />;
  }

  // Show main store for regular users
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">GetAlong Clothing Store</h1>
          <p className="text-xl text-muted-foreground">
            Discover our latest collection of premium clothing
          </p>
        </div>
        <ProductGrid />
      </main>
    </div>
  );
};

export default Index;
