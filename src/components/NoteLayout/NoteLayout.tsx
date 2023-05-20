import { Note } from '@/App';
import { Navigate, Outlet, useParams } from 'react-router-dom';

type NoteLayoutProps = {
  notes: Note[];
};
export default function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note == null) return <Navigate to="/" replace={true} />;

  return <Outlet context={note} />;
}
