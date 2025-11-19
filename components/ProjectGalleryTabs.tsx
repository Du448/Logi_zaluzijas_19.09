"use client"

import { useState } from "react"
import ImagesGridWithLightbox from "./ImagesGridWithLightbox"
import { cn } from "@/lib/utils"

type GalleryTab = {
  id: string
  label: string
  images: string[]
  alt: string
}

type Props = {
  tabs: GalleryTab[]
}

export default function ProjectGalleryTabs({ tabs }: Props) {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id)

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0]

  return (
    <div className="space-y-8">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTabId(tab.id)}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
              activeTabId === tab.id
                ? "bg-brand-blue text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Gallery Content */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-6 text-center">
          <h4 className="text-2xl font-bold text-gray-900">{activeTab.label}</h4>
        </div>
        <ImagesGridWithLightbox
          key={activeTab.id} // Force re-render on tab change for animation
          images={activeTab.images}
          alt={activeTab.alt}
        />
      </div>
    </div>
  )
}
