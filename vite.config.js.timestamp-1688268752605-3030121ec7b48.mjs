// vite.config.js
import { defineConfig } from "file:///D:/_Coding/nature-shop-website/node_modules/vite/dist/node/index.js";
import react from "file:///D:/_Coding/nature-shop-website/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\_Coding\\nature-shop-website";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__vite_injected_original_dirname, "src"),
      tests: path.resolve(__vite_injected_original_dirname, "__tests__"),
      app: path.resolve(__vite_injected_original_dirname, "src/app"),
      pages: path.resolve(__vite_injected_original_dirname, "src/pages"),
      store: path.resolve(__vite_injected_original_dirname, "src/store"),
      components: path.resolve(__vite_injected_original_dirname, "src/components"),
      widgets: path.resolve(__vite_injected_original_dirname, "src/widgets"),
      hooks: path.resolve(__vite_injected_original_dirname, "src/hooks"),
      config: path.resolve(__vite_injected_original_dirname, "src/config"),
      errors: path.resolve(__vite_injected_original_dirname, "src/errors"),
      entity: path.resolve(__vite_injected_original_dirname, "src/entity"),
      assets: path.resolve(__vite_injected_original_dirname, "src/assets")
    }
  },
  server: {
    port: 7070
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxfQ29kaW5nXFxcXG5hdHVyZS1zaG9wLXdlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXF9Db2RpbmdcXFxcbmF0dXJlLXNob3Atd2Vic2l0ZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovX0NvZGluZy9uYXR1cmUtc2hvcC13ZWJzaXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBzcmM6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxuICAgICAgdGVzdHM6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiX190ZXN0c19fXCIpLFxuICAgICAgYXBwOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9hcHBcIiksXG4gICAgICBwYWdlczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvcGFnZXNcIiksXG4gICAgICBzdG9yZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvc3RvcmVcIiksXG4gICAgICBjb21wb25lbnRzOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9jb21wb25lbnRzXCIpLFxuICAgICAgd2lkZ2V0czogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvd2lkZ2V0c1wiKSxcbiAgICAgIGhvb2tzOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9ob29rc1wiKSxcbiAgICAgIGNvbmZpZzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvY29uZmlnXCIpLFxuICAgICAgZXJyb3JzOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9lcnJvcnNcIiksXG4gICAgICBlbnRpdHk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2VudGl0eVwiKSxcbiAgICAgIGFzc2V0czogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvYXNzZXRzXCIpXG4gICAgfVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA3MDcwXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrUixTQUFTLG9CQUFvQjtBQUMvUyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDbEMsT0FBTyxLQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQzFDLEtBQUssS0FBSyxRQUFRLGtDQUFXLFNBQVM7QUFBQSxNQUN0QyxPQUFPLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDMUMsT0FBTyxLQUFLLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQzFDLFlBQVksS0FBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQ3BELFNBQVMsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUM5QyxPQUFPLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDMUMsUUFBUSxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQzVDLFFBQVEsS0FBSyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUM1QyxRQUFRLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDNUMsUUFBUSxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLElBQzlDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
