import { useParams } from 'react-router-dom';

export default function DashboardOverview() {
  const { id } = useParams();

  return <div>Dashboard Overview for ID: {id}</div>;
}
