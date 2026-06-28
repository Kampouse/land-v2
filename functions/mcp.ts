// MCP server for jemartel.dev portfolio
// Implements the Model Context Protocol via HTTP transport at /mcp endpoint
// @ts-nocheck

interface MCPTool {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, { type: string; description: string }>;
    required?: string[];
  };
}

const PORTFOLIO = {
  about: {
    name: "Jean Martel",
    title: "AI-Native Full-Stack Engineer",
    headline: "AI-native builder. I ship production systems, not demos.",
    location: "Montreal, Canada",
    email: "jp@jemartel.dev",
    website: "https://www.jemartel.dev",
    github: "https://github.com/Kampouse",
    bio: "Full-stack engineer specializing in blockchain (NEAR Protocol), AI infrastructure, and developer tooling. I build production-grade applications across web, mobile, and decentralized systems using AI-native workflows.",
  },
  skills: {
    languages: ["TypeScript", "Rust", "Zig", "Python"],
    frontend: ["React", "Qwik", "Vite", "Tailwind CSS", "Expo / React Native"],
    backend: ["Cloudflare Workers", "Hono.js", "Node.js"],
    blockchain: ["NEAR Protocol", "Nostr", "Smart Contracts"],
    infrastructure: ["Cloudflare Pages", "KV Storage", "D1", "TEE"],
    ai: ["Vector Embeddings", "RAG", "Agent Systems", "LLM Integration"],
  },
  projects: [
    {
      id: "7gen",
      title: "7Gen Marketing Website",
      description: "Marketing website for EV fleet solutions company, built with Qwik, Tailwind, Sanity, and Cloudflare.",
      technologies: ["Qwik", "Tailwind CSS", "Sanity", "Cloudflare", "TypeScript"],
      demoUrl: "https://7gen.com/solutions/",
      featured: true,
    },
    {
      id: "outlayer-wallet",
      title: "OutLayer Wallet",
      description: "Multi-wallet custody manager for NEAR Protocol — balances, sends, swaps, policies, and approvals.",
      technologies: ["React", "TypeScript", "Vite", "NEAR Protocol", "Cloudflare Workers", "TEE"],
      demoUrl: "https://wallet.jemartel.dev",
      githubUrl: "https://github.com/Kampouse/outlayer-wallet",
      featured: true,
    },
    {
      id: "fintrack",
      title: "Fintrack",
      description: "Personal portfolio tracker for stocks and crypto with real-time market data and terminal aesthetic.",
      technologies: ["React", "TypeScript", "Vite", "Cloudflare Pages", "Finnhub", "Binance API"],
      demoUrl: "https://fin.jemartel.dev",
      githubUrl: "https://github.com/Kampouse/fintrack-ts",
      featured: true,
    },
    {
      id: "legion-social",
      title: "Legion Social",
      description: "Social platform for NEAR builders with AI chat, builder directory, and project management.",
      technologies: ["React 19", "TypeScript", "Hono.js", "Drizzle ORM", "NEAR Protocol", "Tailwind CSS v4", "AI Integration"],
      demoUrl: "https://near-agent.pages.dev/",
      githubUrl: "https://github.com/NEARBuilders/cyborg",
      featured: false,
    },
    {
      id: "nullclaw",
      title: "NullClaw",
      description: "AI assistant infrastructure in Zig — 678 KB binary, boots in under 2ms, 22+ AI providers, 18 messaging channels.",
      technologies: ["Zig", "Systems Programming", "AI Infrastructure"],
      demoUrl: "https://github.com/kampouse/nullclaw",
      githubUrl: "https://github.com/kampouse/nullclaw",
      featured: false,
    },
    {
      id: "nostr-docs",
      title: "Nostr Docs",
      description: "Comprehensive documentation site for the Nostr protocol — guides, NIPs, and developer resources.",
      technologies: ["Astro", "Starlight", "MDX", "Cloudflare Pages", "TypeScript"],
      demoUrl: "https://nostr.jemartel.dev",
      githubUrl: "https://github.com/Kampouse/nostr-docs",
      featured: true,
    },
    {
      id: "nostrlink",
      title: "NostrLink",
      description: "Professional network built on Nostr — profiles, job postings, and verifiable credentials.",
      technologies: ["React", "TypeScript", "Vite", "Nostr", "Cloudflare Pages"],
      demoUrl: "https://in.jemartel.dev",
      githubUrl: "https://github.com/Kampouse/nostr-linkedin",
      featured: true,
    },
    {
      id: "near-balancer",
      title: "NEAR Balancer",
      description: "Zero-dependency NEAR RPC client with round-robin load balancing across 5 public endpoints, automatic retry, and rate limit handling.",
      technologies: ["TypeScript", "NEAR Protocol", "RPC", "Load Balancing"],
      demoUrl: "https://www.npmjs.com/package/near-balancer",
      githubUrl: "https://github.com/Kampouse/near-balancer",
      featured: true,
    },
    {
      id: "vibe-paper",
      title: "Vibe",
      description: "Research project on compact, retrieval-augmented multi-agent memory systems using vector embeddings and knowledge graphs.",
      technologies: ["Rust", "Vector Embeddings", "Knowledge Graphs", "Memory Systems", "Research"],
      demoUrl: "https://github.com/Kampouse/vibe-paper",
      githubUrl: "https://github.com/Kampouse/vibe-paper",
      featured: false,
    },
  ],
};

const TOOLS: MCPTool[] = [
  {
    name: "get_about",
    description: "Get Jean Martel's bio, contact info, and current headline.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "get_projects",
    description: "List all projects with descriptions, tech stacks, and links. Optionally filter to featured projects only.",
    inputSchema: {
      type: "object",
      properties: {
        featured: {
          type: "boolean",
          description: "If true, only return featured projects.",
        },
      },
    },
  },
  {
    name: "get_project",
    description: "Get detailed information about a specific project by its id (e.g. 'outlayer-wallet', 'fintrack', 'nostrlink').",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "The project id. Available ids: 7gen, outlayer-wallet, fintrack, legion-social, nullclaw, nostr-docs, nostrlink, near-balancer, vibe-paper",
        },
      },
      required: ["id"],
    },
  },
  {
    name: "get_skills",
    description: "Get Jean's technical skills organized by category (languages, frontend, backend, blockchain, infrastructure, AI).",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "search_projects",
    description: "Search projects by technology or keyword. Returns matching projects with descriptions and links.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Technology name or keyword to search for (e.g. 'NEAR', 'React', 'Zig', 'Nostr').",
        },
      },
      required: ["query"],
    },
  },
];

function handleToolCall(name: string, args: Record<string, unknown>): string {
  switch (name) {
    case "get_about":
      return JSON.stringify(PORTFOLIO.about, null, 2);

    case "get_projects": {
      const featured = args.featured as boolean;
      const projects = featured
        ? PORTFOLIO.projects.filter((p) => p.featured)
        : PORTFOLIO.projects;
      return JSON.stringify(projects, null, 2);
    }

    case "get_project": {
      const id = args.id as string;
      const project = PORTFOLIO.projects.find(
        (p) => p.id === id || p.title.toLowerCase().includes(id.toLowerCase())
      );
      if (!project) {
        return JSON.stringify({
          error: `Project not found: ${id}`,
          available: PORTFOLIO.projects.map((p) => p.id),
        });
      }
      return JSON.stringify(project, null, 2);
    }

    case "get_skills":
      return JSON.stringify(PORTFOLIO.skills, null, 2);

    case "search_projects": {
      const query = (args.query as string).toLowerCase();
      const results = PORTFOLIO.projects.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.technologies.some((t) => t.toLowerCase().includes(query))
      );
      if (results.length === 0) {
        return JSON.stringify({
          message: `No projects found matching '${args.query}'.`,
          all_technologies: [
            ...new Set(PORTFOLIO.projects.flatMap((p) => p.technologies)),
          ],
        });
      }
      return JSON.stringify(results, null, 2);
    }

    default:
      return JSON.stringify({ error: `Unknown tool: ${name}` });
  }
}

export const onRequestPost: PagesFunction = async (request) => {
  let body: { jsonrpc: string; id: number | string; method: string; params?: any };

  try {
    body = await request.request.json();
  } catch {
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        id: null,
        error: { code: -32700, message: "Parse error" },
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const { jsonrpc, id, method, params } = body;

  // Validate JSON-RPC version
  if (jsonrpc !== "2.0") {
    return jsonRpcError(id, -32600, "Invalid Request");
  }

  switch (method) {
    case "initialize":
      return jsonResponse({
        jsonrpc: "2.0",
        id,
        result: {
          protocolVersion: "2025-03-26",
          capabilities: {
            tools: {},
          },
          serverInfo: {
            name: "jemartel-portfolio",
            version: "1.0.0",
          },
        },
      });

    case "notifications/initialized":
      // Notification — no response needed
      return new Response(null, { status: 204 });

    case "tools/list":
      return jsonResponse({
        jsonrpc: "2.0",
        id,
        result: {
          tools: TOOLS,
        },
      });

    case "tools/call": {
      const toolName = params?.name;
      const toolArgs = params?.arguments || {};
      const tool = TOOLS.find((t) => t.name === toolName);

      if (!tool) {
        return jsonRpcError(id, -32601, `Tool not found: ${toolName}`);
      }

      const result = handleToolCall(toolName, toolArgs);

      return jsonResponse({
        jsonrpc: "2.0",
        id,
        result: {
          content: [
            {
              type: "text",
              text: result,
            },
          ],
        },
      });
    }

    case "ping":
      return jsonResponse({
        jsonrpc: "2.0",
        id,
        result: {},
      });

    default:
      return jsonRpcError(id, -32601, `Method not found: ${method}`);
  }
};

export const onRequestGet: PagesFunction = async () => {
  return jsonResponse({
    jsonrpc: "2.0",
    id: null,
    error: {
      code: -32000,
      message: "This endpoint requires POST requests. See https://modelcontextprotocol.io for protocol details.",
    },
    serverInfo: {
      name: "jemartel-portfolio",
      version: "1.0.0",
      description: "MCP server for Jean Martel's portfolio. Use tools/list to discover available tools.",
    },
    tools: TOOLS.map((t) => t.name),
  });
};

function jsonResponse(data: unknown): Response {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

function jsonRpcError(id: number | string | null, code: number, message: string): Response {
  return jsonResponse({
    jsonrpc: "2.0",
    id,
    error: { code, message },
  });
}
