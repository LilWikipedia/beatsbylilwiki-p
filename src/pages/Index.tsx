import { useState } from 'react';
import MusicPlayer from '@/components/MusicPlayer';
import TrackList from '@/components/TrackList';
import { useQuery } from '@tanstack/react-query';

interface Track {
  id: string;
  title: string;
  url: string;
}

// This is a mock function - replace with actual Google Drive API integration
const fetchTracks = async (): Promise<Track[]> => {
  // Simulated API response
  return [
    {
      id: '1',
      title: 'Demo Track 1',
      url: 'https://example.com/track1.mp3',
    },
    {
      id: '2',
      title: 'Demo Track 2',
      url: 'https://example.com/track2.mp3',
    },
  ];
};

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const { data: tracks, isLoading } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading tracks...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <header className="p-8 text-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          My Instrumentals
        </h1>
      </header>

      <TrackList
        tracks={tracks || []}
        onTrackSelect={setCurrentTrack}
        currentTrack={currentTrack}
      />
      
      <MusicPlayer currentTrack={currentTrack} />
    </div>
  );
};

export default Index;