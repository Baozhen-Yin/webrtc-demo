import { terser } from 'rollup-plugin-terser';
import webWorkerLoader from 'rollup-plugin-web-worker-loader';
import image from '@rollup/plugin-image';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/index.js',
    output: {
      file: '../../public/js/WebRTC.js',
      format: 'umd',
      name: 'WRTC',
    },
    plugins: [
      terser({
        compress: {
          drop_console: false,
        },
      }),
      webWorkerLoader(),
      nodeResolve(),
    ],
  },
];
