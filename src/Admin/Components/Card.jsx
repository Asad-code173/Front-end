
//https://societyapp.vercel.app/
const Card = ({ title, count, icon: Icon }) => {
  return (
    <div className="w-11/12 md:w-56 bg-white shadow-md  rounded-md p-4 ">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          {Icon && (
            <div className="mt-4"><Icon className="w-5 h-5" /></div>

          )}

        </div>

        <p className="text-xl mt-0 md:-mt-4 font-semibold">{count}</p>
      </div>
    </div>
  );
};

export default Card;
