import { Html, Head, Main, NextScript } from 'next/document'
import {AuthProvider} from "@/providers/AuthProvider";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <AuthProvider>
            <Main />
            <NextScript />
        </AuthProvider>
      </body>
    </Html>
  )
}
