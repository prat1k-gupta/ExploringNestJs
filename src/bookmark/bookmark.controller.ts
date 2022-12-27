import { Controller, Get } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}
  @Get('save')
  saveBookmark() {
    return this.bookmarkService.saveBookmark();
  }
  @Get('create')
  createBookmark() {
    return this.bookmarkService.createBookmark();
  }
}
