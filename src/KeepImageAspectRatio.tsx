import styles from '../styles/KeepImageAspectRatio.module.css';
import Image from 'next/image';

const ASPECT_RATIO_PECENT_lion_g36fe27920_1280 = "150%";
const ASPECT_RATIO_PECENT_lion_gec6da36bc_1920 = "63%";

const KeepImageAspectRatio = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.img_wrapper}
        style={{
          paddingTop: ASPECT_RATIO_PECENT_lion_g36fe27920_1280,
        }}
      >
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/lion-g36fe27920_1280.jpg"
          alt=""
        />
      </div>
      <br />
      <div
        className={styles.img_wrapper}
        style={{
          paddingTop: ASPECT_RATIO_PECENT_lion_gec6da36bc_1920,
        }}
      >
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/lion-gec6da36bc_1920.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default KeepImageAspectRatio;