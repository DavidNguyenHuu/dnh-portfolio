import React from 'react';

export default function Letterbox() {
  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 left-0 w-full h-[12vh] bg-black z-20 pointer-events-none" />

      {/* Bottom bar */}
      <div className="fixed bottom-0 left-0 w-full h-[12vh] bg-black z-20 pointer-events-none" />
    </>
  );
}
