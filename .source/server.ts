// @ts-nocheck
import * as __fd_glob_5 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/005 Globe.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/004 terrain.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/003 logistique.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/002 administratif.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/001 sante.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"001 sante.mdx": __fd_glob_0, "002 administratif.mdx": __fd_glob_1, "003 logistique.mdx": __fd_glob_2, "004 terrain.mdx": __fd_glob_3, "005 Globe.mdx": __fd_glob_4, "index.mdx": __fd_glob_5, });