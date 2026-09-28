<?xml version="1.0" encoding="UTF-8"?>
<!-- Human-readable view of /sitemap.xml in browsers; crawlers ignore it. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap · One Sudoku</title>
        <style>
          :root { color-scheme: light dark; }
          body { font-family: system-ui, -apple-system, sans-serif; max-width: 820px; margin: 0 auto; padding: 32px 16px; line-height: 1.5; }
          h1 { font-size: 1.5rem; margin: 0 0 4px; }
          p { margin: 0 0 24px; opacity: .7; }
          table { width: 100%; border-collapse: collapse; }
          th, td { text-align: left; padding: 10px 8px; border-bottom: 1px solid rgba(128,128,128,.25); }
          th { font-size: .8rem; text-transform: uppercase; letter-spacing: .04em; opacity: .7; }
          td.date { white-space: nowrap; opacity: .7; }
          a { color: #2563eb; text-decoration: none; word-break: break-all; }
          a:hover { text-decoration: underline; }
          @media (prefers-color-scheme: dark) { a { color: #60a5fa; } }
        </style>
      </head>
      <body>
        <h1>One Sudoku sitemap</h1>
        <p>This sitemap lists <xsl:value-of select="count(sm:urlset/sm:url)"/> pages.</p>
        <table>
          <tr><th>URL</th><th>Last modified</th></tr>
          <xsl:for-each select="sm:urlset/sm:url">
            <tr>
              <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
              <td class="date"><xsl:value-of select="sm:lastmod"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
