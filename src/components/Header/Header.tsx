import { SearchBar } from '../SearchBar/SearchBar'
import { SearchFilters } from '../SearchFilters/SearchFilters'

export function Header() {

  return (
    <header className="mt-4 mb-4">
      <h2 className="mb-4">Search for books</h2>
      <SearchBar />
      <SearchFilters />
    </header>
  )
}