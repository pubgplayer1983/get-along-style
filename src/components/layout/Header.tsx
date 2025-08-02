import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { LogIn, User, Crown } from 'lucide-react';

export const Header = () => {
  const { user, isAdmin } = useAuth();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-primary">GetAlong</h1>
          <span className="text-sm text-muted-foreground">Clothing Store</span>
        </div>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2">
              {isAdmin ? (
                <div className="flex items-center space-x-1 text-amber-600">
                  <Crown className="h-4 w-4" />
                  <span className="text-sm font-medium">Admin</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{user.email}</span>
                </div>
              )}
            </div>
          ) : (
            <Button variant="outline" size="sm">
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};