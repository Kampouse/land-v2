import { type RequestHandler } from "@builder.io/qwik-city";
import { projectsData } from "~/data/projects";

const PORTFOLIO = {
  about: {
    name: "Jean Martel",
    title: "AI-Native Full-Stack Engineer",
    headline: "AI-native builder. I ship production systems, not demos.",
    location: "Montreal, Canada",
    email: "jp@jemartel.dev",
    website: "https://jemartel.dev",
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
  projects: projectsData,
};

const TOOLS = [
  { name: "get_about", description: "Get Jean Martel's bio, contact info, and current headline.", inputSchema: { type: "object", properties: {} } },
  { name: "get_projects", description: "List all projects. Optionally filter to featured only.", inputSchema: { type: "object", properties: { featured: { type: "boolean", description: "If true, only return featured projects." } } } },
  { name: "get_project", description: "Get details about a specific project by id.", inputSchema: { type: "object", properties: { id: { type: "string", description: `Project id: ${projectsData.map((p) => p.id).join(", ")}` } }, required: ["id"] } },
  { name: "get_skills", description: "Get Jean's technical skills by category.", inputSchema: { type: "object", properties: {} } },
  { name: "search_projects", description: "Search projects by technology or keyword.", inputSchema: { type: "object", properties: { query: { type: "string", description: "Technology or keyword (e.g. 'NEAR', 'React', 'Zig')" } }, required: ["query"] } },
];

function handleToolCall(name: string, args: Record<string, unknown>): string {
  switch (name) {
    case "get_about":
      return JSON.stringify(PORTFOLIO.about, null, 2);
    case "get_projects": {
      const featured = args.featured as boolean;
      return JSON.stringify(featured ? PORTFOLIO.projects.filter((p) => p.featured) : PORTFOLIO.projects, null, 2);
    }
    case "get_project": {
      const id = (args.id as string).toLowerCase();
      const project = PORTFOLIO.projects.find((p) => p.id === id || p.title.toLowerCase().includes(id));
      return JSON.stringify(project || { error: `Not found: ${id}`, available: PORTFOLIO.projects.map((p) => p.id) });
    }
    case "get_skills":
      return JSON.stringify(PORTFOLIO.skills, null, 2);
    case "search_projects": {
      const q = (args.query as string).toLowerCase();
      const results = PORTFOLIO.projects.filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.technologies.some((t) => t.toLowerCase().includes(q)));
      return JSON.stringify(results.length ? results : { message: `No projects found for '${args.query}'` });
    }
    default:
      return JSON.stringify({ error: `Unknown tool: ${name}` });
  }
}

function setCors({ headers }: any) {
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
}

export const onPost: RequestHandler = async ({ request, json, headers }) => {
  setCors({ headers });
  let body;
  try {
    body = await request.json();
  } catch {
    json(400, { jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } });
    return;
  }

  const { jsonrpc, id, method, params } = body;
  if (jsonrpc !== "2.0") {
    json(200, { jsonrpc: "2.0", id, error: { code: -32600, message: "Invalid Request" } });
    return;
  }

  switch (method) {
    case "initialize":
      json(200, {
        jsonrpc: "2.0", id, result: {
          protocolVersion: "2025-03-26",
          capabilities: { tools: {} },
          serverInfo: { name: "jemartel-portfolio", version: "1.0.0" },
        }
      });
      return;
    case "notifications/initialized":
      return;
    case "tools/list":
      json(200, { jsonrpc: "2.0", id, result: { tools: TOOLS } });
      return;
    case "tools/call": {
      const tool = TOOLS.find((t) => t.name === params?.name);
      if (!tool) {
        json(200, { jsonrpc: "2.0", id, error: { code: -32601, message: `Tool not found: ${params?.name}` } });
        return;
      }
      json(200, { jsonrpc: "2.0", id, result: { content: [{ type: "text", text: handleToolCall(params.name, params?.arguments || {}) }] } });
      return;
    }
    case "ping":
      json(200, { jsonrpc: "2.0", id, result: {} });
      return;
    default:
      json(200, { jsonrpc: "2.0", id, error: { code: -32601, message: `Method not found: ${method}` } });
      return;
  }
};

export const onGet: RequestHandler = async ({ json, headers }) => {
  setCors({ headers });
  json(200, {
    jsonrpc: "2.0",
    id: null,
    serverInfo: { name: "jemartel-portfolio", version: "1.0.0", description: "MCP server for Jean Martel's portfolio. POST JSON-RPC to query." },
    tools: TOOLS.map((t) => t.name),
    example: { method: "tools/list", params: {} },
  });
};

export const onOptions: RequestHandler = async ({ headers }) => {
  setCors({ headers });
};
