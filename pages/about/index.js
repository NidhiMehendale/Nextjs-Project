import Link from 'next/link';
import { Fragment } from 'react';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function AboutPage() {
  return (
    <Fragment>
      <h1>The About Page</h1>
      <ul>
        {details.map((developer) => (
          <li key={developer.id}>
            <Link href={`/about/${developer.id}`}>
              {developer.name}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default AboutPage;
