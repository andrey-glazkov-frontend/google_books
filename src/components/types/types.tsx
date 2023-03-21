export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    author: string[];
    description: string;
    imageLinks: ImageLinks
  };
}


interface ImageLinks {
  smallThumbnail: string | undefined;
  thumbnail: string | undefined;
  small : string | undefined;
}

export interface BooksQueryResponse {
  items: Book[];
  totalItems: number;
}

export interface BookState {
    category: string;
    sort: string;
    startIndex?: number | undefined;
    limit?: number | undefined;
  }  


export interface SearchState {
    query: string;
  }

export interface BooksState {
    books: BooksQueryResponse[];
    category?: string,
    query?: string,
    sort?: string,
    limit?: number | undefined,
    isLoading: boolean;
    error: string | null;
    startIndex?: number;
  }

export interface LoadMoreBooksPayload {
    startIndex: number;
    limit: number;
  }
  

