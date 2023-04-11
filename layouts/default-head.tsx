import Head from 'next/head'
import React from 'react'

type Props = {}

export function DefaultHead({ fontSize, ...props }: { fontSize?: string }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0"
                />
                <meta name="description" content="E-commerce fresh cart " />
                <link rel="icon" type="image/png" href={"/favicon.ico"} />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                {/* <link rel="manifest" crossOrigin="use-credentials" href="/manifest.json" /> */}
                <link rel="stylesheet" href={`/api/setting/theme/${"DEFAULT"}`}></link>
                {/* Facebook Pixel Code */}

                {/* End Facebook Pixel Code  */}
                {fontSize && (
                    <style>
                        {`
            html, body {
              font-size: ${fontSize} !important;
            }
          `}
                    </style>
                )}
            </Head>
        </>
    )
}