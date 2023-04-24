import { IsNotEmpty, IsNotIn, IsNumber, IsString, Length } from "class-validator";



export class pieDataDto{

    @IsNotEmpty({message:"id field must be not empty"})
    @IsNumber()
    id: number;

    @Length(1)
    @IsString()
    label: string;

    @IsNotEmpty({message:"id field must be not empty"})
    @IsNumber({allowNaN:false,allowInfinity:false},{message:"value is incorrect"})
    value: number;

    @Length(1,10,{message:"the color is incorrect"})
    @IsString()
    color: string;

}