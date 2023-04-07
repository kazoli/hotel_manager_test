import DefaultLayout from '../layout/DefaultLayout';
import ContentTitle from '../general/ContentTitle';

function HotelAnalytics() {
  return (
    <DefaultLayout>
      <div className="md:py-[15px] py-[10px]">
        <ContentTitle
          mainTitle="Analytics"
          subTitle="This is only a demonstration page for the router to work."
        />
      </div>
    </DefaultLayout>
  );
}

export default HotelAnalytics;
