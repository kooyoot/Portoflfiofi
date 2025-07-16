import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HeroUIProvider } from "@heroui/react";
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';

window.document.body.classList.add("dark")
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <div className='flex flex-col relative w-screen h-screen overflow-auto bg-black'>
        <div className=' relative' >
          
          <RouterProvider router={router} /></div>
      </div>
    </HeroUIProvider>

  </StrictMode>,
)
