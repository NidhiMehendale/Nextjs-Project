import { useRouter } from 'next/router';

const developers = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function DeveloperPage() {
  const router = useRouter();
  const { aboutId } = router.query;

  // Find the developer based on the aboutId from the URL
  const developer = developers.find((dev) => dev.id === parseInt(aboutId));

  return (
    <div>
      {developer ? (
        <div>
          <h1>{developer.name}</h1>
          <p>{developer.role}</p>
        </div>
      ) : (
        <h1>Developer doesnt exist</h1>
      )}
    </div>
  );
}

export default DeveloperPage;
