import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

/**
 * Hey developer, just a very important note to you! If you ever see a deprecation warning that is displayed when running vitest or 'npm run test:unit'
 * relating to the use of the Node.js module - (punycode), do not worry, I have done an extensive investigation into the potential impact that that warning
 * has on the application code. You can have a look at my investigation from top-to-bottom by visiting this bookmark https://docs.google.com/document/d/1Hv22wkMj1MkiT8FXwB1DfKEBZPdzibTJWpEgKriOnEg/edit#bookmark=id.pho2u9jivdbd
 * All information that you need about this is in that document, please feel free to reach out to me if you have any questions or concerns.
 */

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
