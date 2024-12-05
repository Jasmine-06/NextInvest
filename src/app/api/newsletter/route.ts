import asyncHandler from "../_utlis/asyncHandler";
import {EmailSchema} from  '@/schema/EmailSchema';
import { formatValidationErrors } from "../_utlis/FormatValidationError";
import { ApiError } from "../_utlis/ApiError";
import prisma from "@/lib/dbConnetion";
import { NextResponse } from "next/server";
import { ApiResponse } from "../_utlis/ApiResponse";

export const POST = asyncHandler(async (req) => {

    const result = await EmailSchema.safeParseAsync(req.body);

    if (!result.success) {
        const error = formatValidationErrors(result.error);
        throw new ApiError(400,  'Validation Error', error);
     }

     const { email } = result.data;

    const data = await prisma.newsLetterSubscribe.create({
        data: {
            email: email
        }
     });
     if(!data){
        throw new ApiError(500, 'Something went wrong');
     }

    return NextResponse.json(new ApiResponse({
        message: 'Subscribed successfully',
     }),{status: 200});

});