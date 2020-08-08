import { format } from 'date-fns';
import { useMemo } from 'react';

const DateTime = (props) => {
  const { dateString } = props;
  const serialTimeStr = useMemo(() => {
    let date = new Date(dateString);
    return format(date, 'LLLL d, yyyy');
  }, [dateString]);
  return (
    <time>
      {serialTimeStr}
    </time>
  );
};

export default DateTime;
