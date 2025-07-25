# Gmail MCP Server

A powerful Model Context Protocol server that integrates Gmail, Google Calendar, and Google Classroom APIs, providing seamless access to your Google workspace services through a unified interface.

## Features

- 📧 **Gmail API Integration** - Full access to emails, threads, labels, and attachments
- 📅 **Google Calendar API** - Manage calendar events and schedules
- 🎓 **Google Classroom API** - Course and assignment management
- 🔐 **OAuth 2.0 Security** - Industry-standard authentication
- 🔄 **Unified Interface** - Single MCP server for all Google APIs
- ⚡ **Rate Limit Management** - Built-in quota handling

## Quick Start

### 1. Install MCP Client

```bash
npm install @modelcontextprotocol/client
```

### 2. Configure MCP Client

Add the following configuration to your MCP client settings:

```json
{
  "gmail-mcp": {
    "command": "npx",
    "args": [
      "mcp-remote",
      "https://gmail-mcp-server.ishikabhoyar2005.workers.dev/sse"
    ]
  }
}
```

### 3. Start Using

Once configured, you can access Gmail, Google Calendar, and Google Classroom APIs through the MCP interface!

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
