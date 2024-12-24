import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

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
      title: 'throwaways | 2018 - Present',
      embedCode: '<iframe style="border: 0; width: 700px; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=3353214120/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/" seamless><a href="https://lilwikipedia.bandcamp.com/album/throwaways-2018-present">throwaways 2018 - Present by Lil Wikipedia</a></iframe>'
    },
    {
      id: '2',
      title: 'Seperate Ways | Circa 2017',
      embedCode: '<iframe style="border: 0; width: 700px; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=2275945456/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/" seamless><a href="https://lilwikipedia.bandcamp.com/album/seperate-ways-circa-2017">Seperate Ways Circa 2017 by Lil Wikipedia</a></iframe>'
    },
    {
      id: '3',
      title: 'Afterbirth | Circa 2015',
      embedCode: '<iframe style="border: 0; width: 700px; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=1556366319/size=large/bgcol=333333/linkcol=9a64ff/artwork=small/transparent=true/" seamless><a href="https://lilwikipedia.bandcamp.com/album/afterbirth-circa-2015">Afterbirth Circa 2015 by Lil Wikipedia</a></iframe>'
    },
    {
      id: '4',
      title: 'Prenatal | Circa 2014',
      embedCode: '<iframe style="border: 0; width: 700px; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=3428097919/size=large/bgcol=333333/linkcol=fe7eaf/artwork=small/transparent=true/" seamless><a href="https://lilwikipedia.bandcamp.com/album/prenatal-circa-2014">Prenatal Circa 2014 by Lil Wikipedia</a></iframe>'
    },
    {
      id: '5',
      title: 'Beattapes | Circa 2013',
      embedCode: '<iframe style="border: 0; width: 700px; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=4266689558/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/" seamless><a href="https://lilwikipedia.bandcamp.com/album/beattapes-circa-2013">Beattapes Circa 2013 by Lil Wikipedia</a></iframe>'
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
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Beats by Lil Wikipedia
        </h1>
        <h2 className="text-2xl font-italiac bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          aka Cruz Wootten
        </h2>
        <h3 className="text-1xl font-thin bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-blue-100">
        Most of these are unfinished...cause that Fortnite money good
        </h3>
        <h6 className="text-1xl font-thin bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-blue-100">
        LilWikipediaFN@gmail.com
        </h6>
        <h6 className="text-1xl font-thin bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-blue-100">
        CA Native | Reno, NV since '06
        </h6>

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
