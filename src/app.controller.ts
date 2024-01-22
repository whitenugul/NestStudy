import { Controller, Get, Query } from '@nestjs/common';
import {SearchService} from './search/search.service'
import { searchDTO } from './search/config/search_dto';

@Controller('search')
export class AppController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async Search(@Query() query: searchDTO): Promise<any> {
    const {keyword, category, field} = query
    let result
    if (category !== "total") {
      result = await this.searchService.simpleSearch(keyword, category, field);
    } else {
      result = await this.searchService.multiSearch(keyword)
    }

    return result;
  }
}
