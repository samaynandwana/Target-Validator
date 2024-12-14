import SearchBar from '@/components/Search/SearchBar';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Track Wall Street&apos;s Crystal Ball
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Discover how accurate bank predictions really are using AI-powered analysis
          </p>
          <div className="mt-10">
            <SearchBar />
          </div>
        </div>
      </div>
    </main>
  );
} 