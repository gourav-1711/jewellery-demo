import Header from './Header';
import Footer from './Footer';
import BottomNavigation from './BottomNavigation';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Bottom Navigation - only shown on mobile */}
      <BottomNavigation />
    </div>
  );
}
