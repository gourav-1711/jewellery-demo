import Layout from '@/components/Layout';

export default function Wishlist() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-serif text-primary mb-4">Wishlist</h1>
        <p className="text-muted-foreground">
          Your wishlist is empty. Start adding your favorite pieces!
        </p>
      </div>
    </Layout>
  );
}
