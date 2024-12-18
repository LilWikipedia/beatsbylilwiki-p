import React from 'react';
import { Music2 } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  url: string;
}

interface TrackListProps {
  tracks: Track[];
  onTrackSelect: (track: Track) => void;
  currentTrack: Track | null;
}

const TrackList: React.FC<TrackListProps> = ({ tracks, onTrackSelect, currentTrack }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="glass-morphism rounded-lg overflow-hidden">
        {tracks.map((track) => (
          <div
            key={track.id}
            onClick={() => onTrackSelect(track)}
            className={`track-hover p-4 flex items-center gap-4 ${
              currentTrack?.id === track.id ? 'bg-white/10' : ''
            }`}
          >
            <div className="w-10 h-10 rounded-md glass-morphism flex items-center justify-center">
              <Music2 className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{track.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;