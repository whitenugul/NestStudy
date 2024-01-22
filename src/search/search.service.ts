import { ElasticsearchService } from "@nestjs/elasticsearch";
import { Injectable } from "@nestjs/common";
import { BodyConfig } from './config/config.service';

@Injectable()
export class SearchService {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly bodySearch: BodyConfig 
  ) {}

  async simpleSearch(keyword: string, category: string, field: string) {
    const bodyConfig = this.getBodyConfig(category);
    const {index, body} = bodyConfig

    body.query.bool.must.push({
        multi_match: {
            query: keyword,
            fields: bodyConfig.field.search[field],
          }
    })

    bodyConfig.field.highlight[field].forEach(item => {
        body.highlight.fields[item] = {}
    })

    const searched = {index, body}

    const response = await this.esService.search(searched);

    const searchResult = response.body.hits.hits.map(item => ({
        ...item._source,
        highlight: item.highlight
    }))

    const searchResponse = {
        meta: {
            index: index,
            took: response.body.took,
            total: response.body.total
        },
        searchResult
    }
    return searchResponse;
  }

  async multiSearch(keyword: string) {
    const multiConfig = this.bodySearch.total()
    const msearchBody = []
    const msearchIndices = []
    multiConfig.forEach((config) => {
      const {index, field, body} = config

      body.query.bool.must.push({
        multi_match: {
          fields: field.search,
          query: keyword
        }
      })

      field.highlight.forEach(item => {
        body.highlight.fields[item] = {}
      })

      body._source = field.result

      msearchIndices.push(index)
      msearchBody.push({index}, body)
    })

    const searchResult = await this.esService.msearch({body: msearchBody})

    let total = 0;
    const body = {};
    searchResult.body.responses.forEach((result, i) => {
      body[msearchIndices[i]] = result.hits.hits.map(item => ({
        ...item._source,
        highlight: item.highlight,
      }));
      total += result.hits.total.value;
    });

    const response = {
      meta: {
        index: msearchIndices.join(','),
        took: searchResult.body.took,
        total,
      },
      body,
    };

    return response
  }

  private getBodyConfig(category: string) {
    switch (category) {
      case 'stock':
        return this.bodySearch.stock();
      
      case 'thesis':
        return this.bodySearch.thesis();

      // case 'company':
      //   return this.bodySearch.company();
    }
  }
}