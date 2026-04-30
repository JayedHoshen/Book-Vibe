import bannerImg from "../../assets/banner_bg.png";

const Banner = () => {
  return (
    <div className="container mx-auto hero bg-base-200 min-h-[70vh] my-8 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
        <img src={bannerImg} className="fluid rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold leading-normal">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn btn-success text-white text-base mt-10">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
