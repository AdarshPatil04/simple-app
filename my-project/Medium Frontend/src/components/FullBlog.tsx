import { Blog } from "../hooks/index";
import {Appbar} from "../components/Appbar";
import dp from "../images/Designer.png";

export const FullBlog = ({blog}: {blog: Blog}) => {
  return (
    <div>
      <Appbar />
      <div className="grid lg:grid-cols-12 px-16 py-16 gap-6">
        <div className="col-span-8">
          <div className="flex flex-col gap-2">
            <div className="font-extrabold text-5xl">
              {blog.title}
            </div>
            <div className="text-slate-500">Posted on August 24, 2023</div>
            <div className="text-base">
              {blog.content}
            </div>
          </div>
        </div>
        <div className="col-span-4 hidden lg:block">
          <div className="flex flex-col gap-2">
            <div className="text-base font-medium">Author</div>
            <div className="flex gap-4 justify-center items-center">
              <div>
                <img src={dp} className=" h-8 w-8 object-cover rounded-full" />
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="text-2xl font-bold">{blog.author.name || "Anonymous"}</div>
                <div className="text-slate-700 text-base  ">
                  Master of mirth, purveyor of puns, and the funniest person in
                  the kingdom
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
