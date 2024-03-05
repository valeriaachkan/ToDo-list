import { Badge } from '@mui/joy';
import { useSelector } from 'react-redux';
import { selectTaskCount } from '../../redux/selectors';

type CountBadgeProps = {
  type: string;
  children: React.ReactNode;
};

const CountBadge: React.FC<CountBadgeProps> = ({ type, children }) => {
  const taskCounter = useSelector(selectTaskCount);

  switch (type) {
    case 'All':
      return <>{children}</>;
    case 'Current':
      return <Badge badgeContent={taskCounter.current}>{children}</Badge>;
    case 'Completed':
      return <Badge badgeContent={taskCounter.completed}>{children}</Badge>;
    default:
      return <>{children}</>;
  }
};

export default CountBadge;
