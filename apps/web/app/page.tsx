import { AIService } from '@creation/ai';
import { Button } from '@creation/ui';

export default async function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Creation AI Platform
          </h1>
          <p className="text-xl text-white/80 mb-12">
            Building the Future of AI-Powered Development
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}