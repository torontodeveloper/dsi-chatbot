import Image, { StaticImageData } from "next/image";
import styles from "./model-display.module.css";
interface ModelInterfaceProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const ModelDisplay = ({ image, title, description }: ModelInterfaceProps) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt={title} width={100} height={100} priority={true} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
export default ModelDisplay;
