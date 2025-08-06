import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-serif text-primary mb-4">404</h1>
        <h2 className="text-2xl font-serif text-primary mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Return Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
