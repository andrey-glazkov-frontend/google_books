export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    author: string;
    description: string;
    imageLinks: ImageLinks
  };
}

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface BooksQueryResponse {
  items: Book[];
  totalItems: number;
}

export interface BookState {
    category: string;
    sort: string;
  }  


export interface SearchState {
    query: string;
  }


export interface BooksState {
    books: BooksQueryResponse[];
    isLoading: boolean;
    error: string | null;
  }