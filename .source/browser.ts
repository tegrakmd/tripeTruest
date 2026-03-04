// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"001 sante.mdx": () => import("../content/docs/001 sante.mdx?collection=docs"), "002 administratif.mdx": () => import("../content/docs/002 administratif.mdx?collection=docs"), "003 logistique.mdx": () => import("../content/docs/003 logistique.mdx?collection=docs"), "004 terrain.mdx": () => import("../content/docs/004 terrain.mdx?collection=docs"), "005 Globe.mdx": () => import("../content/docs/005 Globe.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), }),
};
export default browserCollections;