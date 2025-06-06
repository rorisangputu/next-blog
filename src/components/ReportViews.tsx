'use client'

import { fetchUrl } from "@/lib/utils";
import { useEffect } from "react"

type ReportProps ={ 
    title: string;
    slug: string;
    category: string;
}

export default function ReportViews({slug, category, title }: ReportProps){
    useEffect(() => {
        const postData = async () => {
            try {
                await fetch(fetchUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({slug, title, category})
                })
            } catch (error) {
                console.log("Something went wrong..", error)
            }
        }
        postData();
    }, [title, slug, category])
    return (
        <></>
    );
}