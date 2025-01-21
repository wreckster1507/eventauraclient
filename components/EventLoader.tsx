import React from 'react';

const EventCardSkeleton = () => (
  <div className="w-72 h-80 bg-gray-200 rounded-lg animate-pulse">
    <div className="h-40 bg-gray-300 rounded-t-lg"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
      <div className="h-8 bg-gray-300 rounded w-1/3"></div>
    </div>
  </div>
);

const EventLoaderSkeleton = () => {
  return (
    <div className="p-6">
      {/* Search Bar Skeleton */}
      <div className="mb-6">
        <div className="flex items-center p-1 rounded-full max-w-[30rem] w-full border border-primary/10 border-opacity-10 gap-1">
          <div className="rounded-full py-3 w-full h-10 bg-gray-200 animate-pulse"></div>
          <div className="rounded-full w-10 h-10 bg-gray-300 animate-pulse"></div>
        </div>
      </div>

      {/* Ongoing Events Skeleton */}
      <div className="mb-10">
        <div className="h-8 bg-gray-200 w-48 mb-4 animate-pulse"></div>
        <div className="flex flex-wrap justify-center gap-6">
          {[...Array(3)].map((_, index) => (
            <EventCardSkeleton key={index} />
          ))}
        </div>
      </div>

      {/* Completed Events Skeleton */}
      <div>
        <div className="h-8 bg-gray-200 w-48 mb-4 animate-pulse"></div>
        <div className="flex flex-wrap justify-center gap-6">
          {[...Array(3)].map((_, index) => (
            <EventCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventLoaderSkeleton;
