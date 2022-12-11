import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default () => {
 

  return defineConfig({
    plugins: [react()],
    css: {
      preprocessorOptions:{ 
        less: {
          javascriptEnabled: true,
        },
      },
    }
  });
}
