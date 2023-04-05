import DefaultLayout from '../layout/DefaultLayout';
import ContentTitle from '../general/ContentTitle';

function HotelRestaurant() {
  return (
    <DefaultLayout>
      <div className="md:py-[15px] py-[10px]">
        <ContentTitle
          mainTitle="Restaurant"
          subTitle="This only is a demonstration page for the router to work."
        />
      </div>
    </DefaultLayout>
  );
}

export default HotelRestaurant;
