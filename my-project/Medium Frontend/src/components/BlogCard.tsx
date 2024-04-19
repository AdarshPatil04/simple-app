import { Link } from "react-router-dom";
import dp from "../images/Designer.png";
import photo from "../images/photo.png";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  id: number;
}

export const BlogCard = ({ id, authorName, title, content }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="w-screen">
        <div className="flex py-4 justify-center items-center border-2 border-y-gray-200">
          <div>
            <div className="flex justify-between w-64 items-center py-1">
              <img src={dp} className="w-7 h-7 object-cover rounded-full" />
              <div className="font-semibold text-lg">{authorName}</div>
              <div>.</div>
              {/* <div className="text-slate-400 text-sm">{publishedDate}</div> */}
            </div>
            <div className="flex justify-between gap-24">
              <div>
                <div className="font-poppins py-1">{title}</div>
                <div className="pt-1 pb-10 text-neutral-950">
                  {content.slice(0, 150) + "..."}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {/* <button
                  type="button"
                  className="text-zinc-600 bg-white border border-gray-300 focus:outline-none bg-gray-100 font-medium rounded-full text-sm px-1 py-0.5 mr-4"
                >
                  {genre}
                </button> */}
                    <div className="text-sm">{`${Math.ceil(
                      content.length / 1325
                    )} min read`}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <img src={photo} className="hidden h-36 lg:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
