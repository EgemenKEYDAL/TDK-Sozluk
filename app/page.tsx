"use client"

import { SearchForm } from "@/components/search-form"
import { WordEntry } from "@/components/word-entry"
import { useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"

export default function Home() {
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (query: string) => {
    if (!query.trim()) return

    setLoading(true)
    setError(null)
    setResults(null)

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Bir hata oluştu")
      }

      if (data.length === 0) {
        setError("Kelime bulunamadı")
      } else {
        setResults(data)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bir hata oluştu")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <h1 className="text-2xl font-medium tracking-tight text-foreground mb-8 text-pretty">Türkçe Sözlük</h1>
          <SearchForm onSearch={handleSearch} />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {results && results.length > 0 && (
          <div className="space-y-12">
            {results.map((word: any, idx: number) => (
              <WordEntry key={idx} word={word} />
            ))}
          </div>
        )}

        {!loading && !error && !results && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Bir kelime arayın</p>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-24">
        <div className="mx-auto max-w-4xl px-4 py-6">
          <p className="text-sm text-muted-foreground">Türk Dil Kurumu Sözlük Verisi</p>
        </div>
      </footer>
    </div>
  )
}
