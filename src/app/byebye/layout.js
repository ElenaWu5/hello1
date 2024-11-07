// app/layout.js

export default function RootLayout({ children }) {
    return (
      <html>
        <head>
          <title>我的 Next.js 應用</title>
        </head>
        <body>
          <nav>
            <a href="/">首頁</a> | <a href="/about">關於我們</a> | <a href="/users">使用者</a>
          </nav>
          {children}
        </body>
      </html>
    );
  }
  