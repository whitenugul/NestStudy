/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import {BodyConfig} from './config.service'

@Module({
    providers: [BodyConfig],
    exports: [BodyConfig]
})

export class configModule {}