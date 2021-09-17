module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                    @import "@/assets/styles/_variables.scss";
                `,
      },
    },
  },
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "Aplicación Web Ciclo 3";
            return args;
        })
}
};
