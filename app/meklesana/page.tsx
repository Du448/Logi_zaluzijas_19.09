import { Suspense } from 'react'
import { SearchPageClient } from '@/components/meklesana/SearchPageClient'

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-teal mb-4 mx-auto"></div>
              <p className="text-gray-600">Ielādē meklēšanas lapu...</p>
            </div>
          </div>
        </div>
      }
    >
      <SearchPageClient />
    </Suspense>
  )
}
