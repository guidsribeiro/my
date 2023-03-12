'use client';

import Link from 'next/link';
import { EnvelopeSimple, GithubLogo, InstagramLogo, SpotifyLogo } from 'phosphor-react';

const Socials = () => {
  return (
    <div className="text-6xl text-center justify-center flex space-x-3">
      <Link href="https://www.instagram.com/its.gr_/">
        <InstagramLogo className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </Link>
      <Link href="https://open.spotify.com/user/1hxaksorhps73anma9e5b9zw9">
        <SpotifyLogo className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </Link>
      <Link href="https://github.com/guidsribeiro">
        <GithubLogo className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </Link>
      <Link href="mailto:guilherme.s.ribeiro.gr@gmail.com">
        <EnvelopeSimple className="scale-100 hover:scale-150 duration-300 cursor-pointer" />
      </Link>
    </div>
  );
};

export default Socials;
