import { Module } from "@nestjs/common";
import { ElasticsearchModule } from "@nestjs/elasticsearch";
import { SearchService } from './search.service'
import { configModule } from "./config/config.module";

@Module({
    imports: [configModule,
        // ElasticsearchModule.registerAsync({
        // useFactory: () => ({
        //         node: "http://localhost:9200"
        //     })
        // })
        ElasticsearchModule.register({
            node: ['http://localhost:9200']
        })
    ],
    providers: [SearchService],
    exports: [SearchService]
})

export class SearchModule {}