import { Rate } from 'antd';

const Raiting = ({ rait }) => {
  let roundedRating = Math.round(rait);
  return (
    <div>
      <Rate value={roundedRating} disabled allowHalf />
    </div>
  );
};
export default Raiting;
