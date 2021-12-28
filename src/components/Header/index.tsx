import Link from 'next/link';
import { ReactElement } from 'react';

export default function Header(): ReactElement {
  return (
    <header>
      <Link href="/">
        <a>
          <img src="logo.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
}
