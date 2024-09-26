import postcssGlobalData from '@csstools/postcss-global-data';
import cssnano from 'cssnano';
import postcssCustomMedia from 'postcss-custom-media';

export default {
  plugins: [
    postcssGlobalData({
      files: ['./src/styles/custom-media.css']
    }),
    postcssCustomMedia(),
    process.env.NODE_ENV === 'production' && cssnano()
  ]
};
