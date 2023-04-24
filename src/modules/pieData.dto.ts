import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";


export class pieDataDto{

    @IsNotEmpty({message:"id field must be not empty"})
    @Length(1)
    @IsString()
    id: string;

    @IsNotEmpty()
    @Length(1)
    @IsString()
    label: string;

    
    @IsNotEmpty({message:"id field must be not empty"})
    @IsNumber({allowNaN:false,allowInfinity:false},{message:"value is incorrect"})
    value: number;

    @IsNotEmpty()
    @Length(1,25,{message:"the color is incorrect"})
    @IsString()
    color: string;

}