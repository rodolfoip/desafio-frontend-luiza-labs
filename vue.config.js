module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/assets/style/variables';
          @import '@/assets/style/helper/_media-queries.scss';
          @import '@/assets/style/helper/_container.scss';
          `,
      },
    },
  },
};
