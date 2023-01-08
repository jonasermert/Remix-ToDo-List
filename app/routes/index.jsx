import {Link} from '@remix-run/react';

export default function Index() {
  return (
    <main id="content">
     <h1>Jonas Todo List</h1>
     <p>A better way of keeping track of my notes</p>
     <p id="cta">
      <Link to="/login">Login</Link>
      <Link to="/notes">Notes</Link>
     </p>
    </main>
  )
}

export function links () {
  return [{ rel: 'stylesheet', href: 'home'}];
}