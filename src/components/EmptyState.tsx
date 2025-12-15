import Empty from "../assets/icons/empty.svg";
interface Props {
  text: string;
  title?: string;
  height?: string;
}

const EmptyState = ({ text, title, height }: Props) => {
  return (
    <div
      className={` flex flex-col items-center justify-center ${height ? height : "h-64"}`}
    >
      <img src={Empty} alt="" />
      <p className="text-2xl text-black font-semibold mt-6">{title}</p>
      <p className="text-sm mt-6">{text}</p>
    </div>
  );
};

export default EmptyState;
