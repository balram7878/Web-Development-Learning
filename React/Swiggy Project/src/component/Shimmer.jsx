const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Shimmer() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center flex-wrap gap-10 p-10  w-[90%]  ">
          {data.map((e, index) => {
            return (
              <div
                key={index}
                className="w-[320px] h-62 bg-gray-300 rounded-xl shadow-lg flex justify-end items-center flex-col gap-3 shimmer"
              >
                <div className="bg-gray-300 w-[100%] h-[80%]  rounded-t-2xl shimmer"></div>
                <div className="bg-gray-300 w-[90%] h-3 "></div>
                 <div className="bg-gray-300 w-[90%] h-3 "></div>
                  <div className="bg-gray-300 w-[90%] h-3 mb-5 "></div>
            </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
