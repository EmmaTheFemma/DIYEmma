"use client";
import { NextStudio } from 'next-sanity/studio';
import config from '../../../../../sanity.config';

// TODO: Makes it static!! Or whatever so it can be loaded. Get 500 Internal Server Error
/* export async function generateStaticParams() {
  
  return ({
    "/admin": "/admin", // index as in [...index]
  });

} */


export default function AdminPage() {
    return <NextStudio config={config} />
};