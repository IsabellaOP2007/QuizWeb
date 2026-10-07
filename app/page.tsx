import Navbar from './components/navbar';
import ProgressBar from './components/progressbar';
import UserForm from './components/userform';
import Timer from './components/timer';

export default function Home() {
  return (
    <main style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <Navbar />
      <Navbar mirrored />
      <hr style={{ margin: '50px 0' }} />
      <ProgressBar />
      <hr style={{ margin: '50px 0' }} />
      <UserForm />
      <hr style={{ margin: '50px 0' }} />
      <Timer />
    </main>
  );
}
