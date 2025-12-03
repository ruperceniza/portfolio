import React, { memo } from 'react';

const PhotosContent: React.FC = memo(() => {
  const photos = [
    {
      src: "/photos/me.jpg",
      title: "Profile Photo",
      description: "Professional headshot"
    },
  ];

  return (
    <div className="p-4 w-full text-sm pr-2 box-border bg-[#c0c0c0]">
      <div className="mx-auto max-w-full space-y-4">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold">Photo Gallery</h2>
          <p className="text-xs text-[#444]">Personal and professional photos</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="p-3 bg-[#d6d6d6] border border-[#808080] shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-auto mb-2 border border-[#808080]"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="text-center">
                <div className="font-bold text-xs">{photo.title}</div>
                <div className="text-xs text-[#444]">{photo.description}</div>
              </div>
            </div>
          ))}
        </div>
        
        {photos.length === 0 && (
          <div className="text-center p-8 bg-[#d6d6d6] border border-[#808080] shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080]">
            <p className="text-xs text-[#444]">No photos available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
});

PhotosContent.displayName = 'PhotosContent';

export default PhotosContent;