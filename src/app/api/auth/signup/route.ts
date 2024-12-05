import asyncHandler from "../../_utlis/asyncHandler";
import { SignupSchemaBackend } from "@/schema/SignupSchemaBackend";
import { formatValidationErrors } from "../../_utlis/FormatValidationError";
import { ApiError } from "../../_utlis/ApiError";
import prisma from "@/lib/dbConnetion";
import bcrypt from 'bcryptjs';
import { ApiResponse } from "../../_utlis/ApiResponse";
import { NextResponse } from "next/server";
import { Roles } from "@prisma/client";

export const POST = asyncHandler(async (req) => {
   
    const result = await SignupSchemaBackend.safeParseAsync(req.body);

    if (!result.success) { 
    const error = formatValidationErrors(result.error);
    throw new ApiError(400, 'validation error', error);
    }

    const {name ,email, password } = result.data;

    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    })
    
    if (existingUser) {
        throw new ApiError(400, 'user already exists');
    }

    let user;
    
    if(email === 'jasminechouhan091@gmail.com'){
        user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                roles: [Roles.ADMIN , Roles.USER],
            },
        });
    }else{
       user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                roles: [Roles.USER],
            },
        });
    }

 

    if (!user) {
        throw new ApiError(400, 'user not created');
    }

    const savedUser = await prisma.user.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
            name: true,
            email: true,
            roles: true,
        },
        
    });
    
    return NextResponse.json(new ApiResponse(savedUser) , {status: 200});
});