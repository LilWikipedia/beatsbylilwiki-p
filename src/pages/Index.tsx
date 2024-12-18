import { useState } from 'react';
import MusicPlayer from '@/components/MusicPlayer';
import TrackList from '@/components/TrackList';
import { useQuery } from '@tanstack/react-query';

interface Track {
  id: string;
  title: string;
  embedCode: string;
}

// Mock data with placeholder iframes for Bandcamp embeds
const fetchTracks = async (): Promise<Track[]> => {
  return [
    {
      id: '1',
      title: 'Track 1',
      embedCode: '<iframe style="border: 0; width: 400px; height: 472px;" src="about:blank"></iframe>'
    },
    {
      id: '2',
      title: 'Track 2',
      embedCode: '<iframe style="border: 0; width: 400px; height: 472px;" src="about:blank"></iframe>'
    },
    {
      id: '3',
      title: 'Track 3',
      embedCode: '<iframe style="border: 0; width: 400px; height: 472px;" src="about:blank"></iframe>'
    }
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

      <div className="max-w-4xl mx-auto grid gap-8">
        {tracks?.map((track) => (
          <div key={track.id} className="glass-morphism p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{track.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: track.embedCode }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;