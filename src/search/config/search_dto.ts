/* eslint-disable prettier/prettier */
import { IsString } from "class-validator"

export class searchDTO {
    @IsString()
    keyword: string

    @IsString()
    category: string

    @IsString()
    field: string
}