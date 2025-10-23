import NewArivalsIcon from "./svg/NewArivalsIcon";

type NewArivalsTagProps = {
  text: string
  className?: string;

};

const NewArivalsTag = ({
  text, className

}: NewArivalsTagProps) => {
  return (
    <div
      className={`${className} flex justify-between items-center px-[6px] py-1 bg-Green-600 text-white rounded-sm gab-1 w-fit`}
    >
      <NewArivalsIcon />
      {text}
    </div>
  );
};

export default NewArivalsTag;
