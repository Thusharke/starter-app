import Card from '../FeatureCard';
import Stats from '../Stats';
import Demo from '../Demo';
import DetailsSkeleton from '../Skeletons/DetailsSkeleleton';

interface IDetailsProps {
  content: DetailsData;
}

export interface DetailsData {
  img: String;
  cashBack: String;
  savings: String;
  faster: String;
  tagline: String;
  changingTxt: String;
  cards: CardDetails[];
  playBtn: String;
  playBtnTxt: String;
  footer: String;
}

interface CardDetails {
  icon: String;
  title: String;
  text: String;
}

const Details: React.FC<IDetailsProps> = ({ content }) => {
  return (
    <div className='bg-white w-full h-auto'>
      {content && (
        <div className='w-full md:w-10/12  mx-auto pb-32'>
          <Stats
            img={content.img}
            cashBack={content.cashBack}
            savings={content.savings}
            faster={content.faster}
          />
          <div className='mt-12 md:mt-32'>
            <h1 className='text-lg md:text-lgg text-heroHead text-center pb-4'>
              {content.tagline}
              <br />
              {content.changingTxt}
            </h1>
          </div>
          <div className='flex justify-evenly mt-8 mb-8 flex-wrap'>
            {content.cards.map((card) => {
              <Card icon={card.icon} title={card.title} text={card.text} />;
            })}
          </div>
          <Demo
            playBtn={content.playBtn}
            playBtnTxt={content.playBtnTxt}
            footer={content.footer}
          />
        </div>
      )}
      {!content && <DetailsSkeleton />}
    </div>
  );
};

export default Details;
