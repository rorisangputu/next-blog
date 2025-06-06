import Link from 'next/link';
import React from 'react'



export default function NotFound() {
  return (
    <section>
        <h1>404 - Page Not Found</h1>
        <p>This page you are looking for does not exist.</p>
        <Link href={'/'}>
            Go Home.
        </Link>
    </section>
  );
}