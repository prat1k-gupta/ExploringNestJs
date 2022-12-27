import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarkService {
  saveBookmark() {
    return 'Bookmark saved';
  }
  createBookmark() {
    return 'Bookmark created';
  }
}
