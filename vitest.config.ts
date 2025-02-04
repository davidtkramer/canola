import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      exclude: [
        'examples',
        'js/__test__',
        'js/native.cjs',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
