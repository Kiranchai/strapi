module.exports = {
  routes: [
    {
      method: "GET",
      path: "/export-media",
      handler: "media-export.exportMedia",
      config: {
        auth: false, // lub true jeśli chcesz chronić dostęp
      },
    },
  ],
};
