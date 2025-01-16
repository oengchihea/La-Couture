'use client'

import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation'

export const useCustomNavigation = () => {
  const router = useRouter()

  const navigate = useCallback((path: string) => {
    // Add exit animation class
    document.body.classList.add('page-exit')
    
    // Wait for animation
    setTimeout(() => {
      router.push(path)
      
      // Add enter animation class
      requestAnimationFrame(() => {
        document.body.classList.remove('page-exit')
        document.body.classList.add('page-enter')
        
        // Clean up enter class
        setTimeout(() => {
          document.body.classList.remove('page-enter')
        }, 800)
      })
    }, 800)
  }, [router])

  return { navigate }
}

