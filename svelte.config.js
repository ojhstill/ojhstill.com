import adapter from 'svelte-adapter-github';
import { vitePreprocess } from "@sveltejs/kit/vite";

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      domain: 'ojhstill.com',
      jekyll: false
    }),
  },
  preprocess: vitePreprocess(),
};

export default config;
