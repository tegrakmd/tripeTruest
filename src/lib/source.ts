// Import from generated output - fumadocs-mdx:collections/server virtual module
// resolution fails with Turbopack, so we use the direct path
import { docs } from "../../.source/server";
import { loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});
