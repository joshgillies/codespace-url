/** Will be true when accessed within the context of a GitHub Codespace. */
export const CODESPACES = !!Deno.env.get("CODESPACES");

/**
 * Get the Github Codespace URL of a forwarded port.
 * Ported to Deno from https://www.npmjs.com/package/codespaces-port.
 * 
 * @param port Specify a port in order to retrieve it's URL.
 * 
 */
export function getCodespaceURL(
  port: string | number,
): string | void {
  if (!CODESPACES) return;

  const id = Deno.env.get("CLOUDENV_ENVIRONMENT_ID");
  const url = `https://${id}-${port}.apps.codespaces.githubusercontent.com`;
  return url;
}

if (import.meta.main) {
  const port = Deno.args[0];
  if (!port) {
    throw new TypeError("Specify a port in order to retrieve it's URL.");
  }
  const url = getCodespaceURL(port);
  if (!url) {
    throw new Error(
      "This tool can only be run within the context of a GitHub Codespace: https://github.com/features/codespaces.",
    );
  }
  console.log(url);
}
