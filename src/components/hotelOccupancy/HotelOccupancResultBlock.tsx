type tProps = {
  title: string;
  data: string[];
};

function HotelOccupancResultBlock(props: tProps) {
  return (
    <section className="mt-[15px] first:mt-[0]">
      <div className="hotel-occupancy-result-label">{props.title}</div>
      <ul>
        {props.data.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </section>
  );
}

export default HotelOccupancResultBlock;
