import React from 'react';

export default async function AboutPage() {
    await new Promise((resolve)=>setTimeout(resolve, 4000))

    throw new Error("something went wrong")
    return (
        <div>
           <h1>About Page component </h1>
        </div>
    );
}

