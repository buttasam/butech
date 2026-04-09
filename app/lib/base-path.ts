const basePath = process.env.GITHUB_ACTIONS === "true"
  ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""}`.replace(/\/$/, "")
  : "";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}
