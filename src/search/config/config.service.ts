export class BodyConfig {
  stock() {
    return {
      index: 'stock_news-*',
      field: {
        search: {
          total: [
            'reporter_n.ngram^100',
            'content_ko.kobrick',
            'category_k',
            'title_ko.kobrick^1000',
          ],
          content: ['content_ko.kobrick'],
          title: ['title_ko.kobrick'],
          reporter: ['reporter_n.ngram'],
          category: ['category_k'],
        },
        highlight: {
          total: [
            'reporter_n.ngram',
            'content_ko.kobrick',
            'category_k',
            'title_ko.kobrick',
          ],
          content: ['content_ko.kobrick'],
          title: ['title_ko.kobrick'],
          reporter: ['reporter_n.ngram'],
          category: ['category_k'],
        },
        result: [
          'id_k',
          'nid_k',
          'reporter_n',
          'content_ko',
          'category_k',
          'title_ko',
          'start_dttm_dt',
          'update_dttm_dt',
        ],
      },
      body: {
        query: {
          bool: {
            must: [],
            filter: [],
            should: [],
          },
        },
        highlight: {
          number_of_fragments: 100,
          fields: {},
        },
        _source: [],
      },
    };
  }

  thesis() {
    return {
      index: 'ndsl_thesis-*',
      field: {
        search: {
          total: [
            'title_h_ko.kobrick',
            'author_n.ngram',
            'author_eng',
            'publisher_ko.kobrick',
            'ministry_ko.kobrick',
            'location_org_ko.kobrick',
            'subject_k',
            'abstract_ko.kobrick',
          ],
          author: ['author_n.ngram', 'author_eng'],
          ministry: ['ministry_ko.kobrick'],
          publisher: ['publisher_ko.kobrick'],
          location: ['location_org_ko.kobrick'],
          subject: ['subject_k'],
          abstract: ['abstract_ko.kobrick'],
        },
        highlight: {
          total: [
            'title_h_ko.kobrick',
            'author_n.ngram',
            'author_eng',
            'publisher_ko.kobrick',
            'ministry_ko.kobrick',
            'location_org_ko.kobrick',
            'subject_k',
            'abstract_ko.kobrick',
          ],
          author: ['author_n.ngram', 'author_eng'],
          ministry: ['ministry_ko.kobrick'],
          publisher: ['publisher_ko.kobrick'],
          location: ['location_org_ko.kobrick'],
          subject: ['subject_k'],
          abstract: ['abstract_ko.kobrick'],
        },
        result: [
          'id_k',
          'category_k',
          'title_h_ko',
          'author_n',
          'author_eng',
          'datestamp_dt',
          'publish_date_dt',
          'publisher_ko',
          'ministry_ko',
          'period_start_dt',
          'period_end_dt',
          'location_org_ko',
          'subject_k',
          'abstract_ko',
          'reference_kske',
          'set_spec_k',
          'subject_k',
        ],
      },
      body: {
        query: {
          bool: {
            must: [],
            filter: [],
            should: [],
          },
        },
        highlight: {
          fields: {},
        },
        _source: [],
      },
    };
  }

  total() {
    return [
      {
        index: 'stock_news-*',
        field: {
          search: [
            'reporter_n.ngram^100',
            'content_ko.kobrick',
            'category_k',
            'title_ko.kobrick^1000',
          ],
          highlight: [
            'reporter_n.ngram',
            'content_ko.kobrick',
            'category_k',
            'title_ko.kobrick',
          ],
          result: [
            'id_k',
            'nid_k',
            'reporter_n',
            'content_ko',
            'category_k',
            'title_ko',
            'start_dttm_dt',
            'update_dttm_dt',
          ],
        },
        body: {
          query: {
            bool: {
              must: [],
              filter: [],
              should: [],
            },
          },
          highlight: {
            number_of_fragments: 100,
            fields: {},
          },
          _source: [],
        },
      },
      {
        index: 'ndsl_thesis-*',
        field: {
          search: [
            'title_h_ko.kobrick',
            'author_n.ngram',
            'author_eng',
            'publisher_ko.kobrick',
            'ministry_ko.kobrick',
            'location_org_ko.kobrick',
            'subject_k',
            'abstract_ko.kobrick',
          ],
          highlight: [
            'title_h_ko.kobrick',
            'author_n.ngram',
            'author_eng',
            'publisher_ko.kobrick',
            'ministry_ko.kobrick',
            'location_org_ko.kobrick',
            'subject_k',
            'abstract_ko.kobrick',
          ],
          result: [
            'id_k',
            'category_k',
            'title_h_ko',
            'author_n',
            'author_eng',
            'datestamp_dt',
            'publish_date_dt',
            'publisher_ko',
            'ministry_ko',
            'period_start_dt',
            'period_end_dt',
            'location_org_ko',
            'subject_k',
            'abstract_ko',
            'reference_kske',
            'set_spec_k',
            'subject_k',
          ],
        },
        body: {
          query: {
            bool: {
              must: [],
              filter: [],
              should: [],
            },
          },
          highlight: {
            fields: {},
          },
          _source: [],
        },
      },
    ];
  }
}
