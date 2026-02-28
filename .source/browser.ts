// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"administratif.mdx": () => import("../content/docs/administratif.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "logistique.mdx": () => import("../content/docs/logistique.mdx?collection=docs"), "sante.mdx": () => import("../content/docs/sante.mdx?collection=docs"), "terrain.mdx": () => import("../content/docs/terrain.mdx?collection=docs"), }),
};
export default browserCollections;