import ImageWithAspectRatio from "./ImageWithAspectRatio";

const ASPECT_RATIO_lion_g36fe27920_1280 = 0.67; // width / height ->853/1280
const ASPECT_RATIO_PECENT_lion_gec6da36bc_1920 = 1.59; // width / height -> 1920 / 1214

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
