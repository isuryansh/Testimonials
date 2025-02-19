import { Link } from "react-router-dom";
import { FolderLogo } from "../components/FolderLogo";
import { useContext, useEffect, useState } from "react";
import { CreateSpaceModel } from "../components/CreateSpaceModal";
import { AuthHeader } from "../components/AuthHeader";
import { SpaceCard } from "../components/SpaceCard";
import { userSpaces } from "../hooks/Hooks";
import { UrlContext } from "../context/UrlContest";
import { X } from "lucide-react";
import { toast } from "react-toastify";

export const Dashboard = () => {
  const { spaces } = userSpaces();
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { url } = useContext(UrlContext);

  useEffect(() => {
    if (url) {
      setShowPopup(true);
    }
  }, [url]);

  const CopyUrl = async () => {
    await navigator.clipboard.writeText(url);
    toast("Link Copied", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <>
      <div>
        <div className="bg-zinc-900 min-h-screen">
          <AuthHeader />
          <div>
            <div>
              <div className="text-white text-3xl font-semibold ml-60 mt-10 mb-1.5">
                Spaces
              </div>
              <div className="bg-zinc-800 pt-10 pb-10 mx-56">
                <div className="flex flex-col items-center">
                  <FolderLogo />
                  <div className="text-white text-lg pt-0.5 mt-1">
                    Create your space to start collecting your testimonials
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-white text-md bg-indigo-600 py-1 px-3 rounded-sm mt-6"
                  >
                    Create new space
                  </button>
                  {showModal && (
                    <CreateSpaceModel
                      onClose={() => {
                        setShowModal(false);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="text-white text-3xl font-bold mt-30 ml-36">
            Overview
          </div>
          <div className="grid grid-cols-3 ml-20 pb-20">
            {spaces.map((space) => (
              <SpaceCard
                space_id={space.space_id}
                name={space.name}
                description={space.description}
                url={space.url}
              />
            ))}
          </div>
          {showPopup && (
            <div className="flex flex-row justify-center">
              <div className="fixed top-4 flex flex-col justify-center bg-white rounded-md">
                <div className="px-8 mb-2 mt-6">
                  <img
                    className="size-50 w-sm"
                    src="https://i.giphy.com/g9582DNuQppxC.webp"
                  />
                  <div className="flex flex-col items-center mx-5 mb-2 mt-4">
                    <div className="text-black text-xl mb-1">
                      Here's link for your customers
                    </div>
                    <button
                      onClick={() => {
                        CopyUrl();
                      }}
                      className="text-indigo-400 font-medium text-sm cursor-pointer hover:underline"
                    >
                      {url}
                    </button>
                  </div>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="bg-indigo-500 py-1.5 font-medium mt-3 px-4 w-full hover:bg-indigo-600 cursor-pointer text-white rounded-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
