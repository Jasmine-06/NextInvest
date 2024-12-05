'use client'
import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import RegisterSchema from '@/schema/RegisterSchema';
import * as z from 'Zod'

const form = useForm<z.infer<typeof RegisterSchema>>({
  resolver: zodResolver(RegisterSchema),
  defaultValues: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
})



const onSubmit = (data: unknown) => {
}

export default function register() {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
     <Card className='w-[350px] h-[450px]'>
      <CardHeader className='flex flex-col items-center'>
      <div>    
         <Image 
         src="/asset/images/4.svg"
         height={170}  
         width={170}
         alt="logo"
      />
      </div>
      <p>Register your account</p>
      <Separator />
      </CardHeader>
      <CardContent>
    
      </CardContent>
     </Card>
    </div>
  )
}



