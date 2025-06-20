export const Card = ({ icon, label }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div>
        <a href="#">
          <img className="rounded-md" src={icon} alt="Card Preview" />
        </a>
      </div>
      <div className="px-4 pb-3">
        <a href="#">
          <h5 className="text-xl font-semibold">{label}</h5>
        </a>
      </div>
    </div>
  );
};
