import { SearchBar } from '../SearchBar/SearchBar';
import { SearchFilters } from '../SearchFilters/SearchFilters';

export function Header() {

  return (
    <div>
      <h2>Search for books</h2>
      <SearchBar />
      <SearchFilters />
    </div>
  );
}