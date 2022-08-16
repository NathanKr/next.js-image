import ImageWithAspectRatio from "./ImageWithAspectRatio";

const ASPECT_RATIO_lion_g36fe27920_1280 = 1.5;
const ASPECT_RATIO_PECENT_lion_gec6da36bc_1920 = 0.63;

const KeepImageAspectRatio = () => {
  return (
    <div>
      <ImageWithAspectRatio
        aspectRratio={ASPECT_RATIO_lion_g36fe27920_1280}
        imgSrc="/images/lion-g36fe27920_1280.jpg"
        altValue="image"
      />
      <ImageWithAspectRatio
        aspectRratio={ASPECT_RATIO_PECENT_lion_gec6da36bc_1920}
        imgSrc="/images/lion-gec6da36bc_1920.jpg"
        altValue="image"
      />
    </div>
  );
};

export default KeepImageAspectRatio;
