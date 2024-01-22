import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { SearchModule } from './search/search.module'
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [SearchModule],
  controllers: [AppController],
  providers: [{
    provide: APP_PIPE,
    useClass: ValidationPipe
}]
})
export class AppModule {}
