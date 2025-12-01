"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, UserPlus, Users } from "lucide-react";
import Image from "next/image";
import "./userSlider.css";
import { storyUsers } from "./UsersStory";

export default function PeopleYouMightKnow() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
  });

  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className=" px-4 py-6 relative bg-light-gray-50 rounded-l-md mt-6">
      <h3 className="flex items-center gap-2 pb-4">
        <Users size={20} />
        <strong>People You Might Know</strong>
      </h3>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-light-gray w-12 h-12 flex items-center justify-center  rounded-full shadow cursor-pointer"
      >
        <ArrowRight />
      </button>

      <div className="embla " ref={emblaRef}>
        <div className="embla__container">
          {storyUsers.map((user) => (
            <div
              key={user.id}
              className="embla__slide  overflow-hidden flex flex-col cursor-pointer story-card h-64 border border-white/20 w-52 rounded-md pb-3"
            >
              <div className="relative w-full h-46">
                <Image
                  src={user.profileImage}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className=" pt-3 text-center">{user.name}</p>
              {/* For simplicity im using that sorry thing */}
              <p className="flex  pt-3 text-center text-sm items-center justify-center">
                <div className="flex items-center justify-center">
                  {/* Image is screech hear  */}
                  {user.story.map((s) => (
                    <Image
                      src={s.thumbnail}
                      alt={s.id}
                      key={s.id}
                      height={10}
                      width={10}
                      className="rounded-full  object-contain"
                    />
                  ))}
                </div>
                {user.story.length} Mutual Friends
              </p>
              <button className="text-primary bg-primary/25 mx-3 p-[0.3rem] cursor-pointer text-sm rounded-md flex items-center justify-center gap-2 pointer mt-4">
                <UserPlus /> Add Friend
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
