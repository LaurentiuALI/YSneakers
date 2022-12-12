import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default () => {
 

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: "https://localhost:8000",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    css: {
      preprocessorOptions:{ 
        less: {
          javascriptEnabled: true,
        },
      },
    }
  });
}
