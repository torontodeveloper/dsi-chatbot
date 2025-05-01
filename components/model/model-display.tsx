import Image from "next/image";
interface ModelInterfaceProps {
  image: string;
  title: string;
  description: string;
}

const ModelDisplay = ({ image, title, description }: ModelInterfaceProps) => {
  return (
    <button>
      <Image src={image} alt={title} width={300} height={300} priority={true} />
      <h1>{title}</h1>
      <p>{description}</p>
    </button>
  );
};
export default ModelDisplay;
