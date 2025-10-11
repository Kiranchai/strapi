const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

module.exports = {
  exportMedia: async (ctx) => {
    try {
      const uploadsDir = path.join("/app/public/uploads"); // dostosuj ścieżkę do twojego volume
      const zipName = "media-export.zip";

      ctx.set("Content-Type", "application/zip");
      ctx.set("Content-Disposition", `attachment; filename=${zipName}`);

      const archive = archiver("zip", { zlib: { level: 9 } });

      archive.on("error", (err) => {
        throw err;
      });

      archive.pipe(ctx.res);
      archive.directory(uploadsDir, false);
      await archive.finalize();
    } catch (err) {
      ctx.throw(500, err.message);
    }
  },
};
