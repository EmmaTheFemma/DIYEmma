"use client";
import { NextStudio } from 'next-sanity/studio';
import config from '../../../../../sanity.config';

// TODO: Makes it static!!
/* export async function generateStaticParams() {
  
    return ({
      index: "/admin", // index as in [...index]
    });
  
  } */


export default function AdminPage() {
    return <NextStudio config={config} />
};