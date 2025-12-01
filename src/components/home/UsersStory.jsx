"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import "./userSlider.css";

export const storyUsers = [
  {
    id: "u01",
    name: "Ariana Gomez",
    profileImage: "https://picsum.photos/seed/1/80/80",
    story: [
      { id: "story_001", thumbnail: "https://picsum.photos/seed/s1/120/200" },
      { id: "story_002", thumbnail: "https://picsum.photos/seed/s2/120/200" },
    ],
  },
  {
    id: "u02",
    name: "Jonathan Smith",
    profileImage: "https://picsum.photos/seed/2/80/80",
    story: [
      { id: "story_003", thumbnail: "https://picsum.photos/seed/s3/120/200" },
    ],
  },

  {
    id: "u04",
    name: "Michael Johnson",
    profileImage: "https://picsum.photos/seed/4/80/80",
    story: [
      { id: "story_004", thumbnail: "https://picsum.photos/seed/s4/120/200" },
    ],
  },
  {
    id: "u05",
    name: "Sophie Turner",
    profileImage: "https://picsum.photos/seed/5/80/80",
    story: [
      { id: "story_005", thumbnail: "https://picsum.photos/seed/s5/120/200" },
      { id: "story_006", thumbnail: "https://picsum.photos/seed/s6/120/200" },
    ],
  },

  {
    id: "u07",
    name: "Olivia Brown",
    profileImage: "https://picsum.photos/seed/7/80/80",
    story: [
      { id: "story_007", thumbnail: "https://picsum.photos/seed/s7/120/200" },
    ],
  },
  {
    id: "u08",
    name: "Lucas Miller",
    profileImage: "https://picsum.photos/seed/8/80/80",
    story: [
      { id: "story_008", thumbnail: "https://picsum.photos/seed/s8/120/200" },
      { id: "story_009", thumbnail: "https://picsum.photos/seed/s9/120/200" },
    ],
  },
  {
    id: "u09",
    name: "Emma Wilson",
    profileImage: "https://picsum.photos/seed/9/80/80",
    story: [
      { id: "story_010", thumbnail: "https://picsum.photos/seed/s10/120/200" },
    ],
  },

  {
    id: "u11",
    name: "Natalie Hughes",
    profileImage: "https://picsum.photos/seed/11/80/80",
    story: [
      { id: "story_011", thumbnail: "https://picsum.photos/seed/s11/120/200" },
    ],
  },

  {
    id: "u13",
    name: "Isabella Clark",
    profileImage: "https://picsum.photos/seed/13/80/80",
    story: [
      { id: "story_012", thumbnail: "https://picsum.photos/seed/s12/120/200" },
      { id: "story_013", thumbnail: "https://picsum.photos/seed/s13/120/200" },
    ],
  },

  {
    id: "u15",
    name: "Sophia Lopez",
    profileImage: "https://picsum.photos/seed/15/80/80",
    story: [
      { id: "story_014", thumbnail: "https://picsum.photos/seed/s14/120/200" },
    ],
  },
  {
    id: "u16",
    name: "James Lee",
    profileImage: "https://picsum.photos/seed/16/80/80",
    story: [
      { id: "story_015", thumbnail: "https://picsum.photos/seed/s15/120/200" },
    ],
  },

  {
    id: "u18",
    name: "Benjamin Hall",
    profileImage: "https://picsum.photos/seed/18/80/80",
    story: [
      { id: "story_016", thumbnail: "https://picsum.photos/seed/s16/120/200" },
    ],
  },

  {
    id: "u20",
    name: "Alexander Young",
    profileImage: "https://picsum.photos/seed/20/80/80",
    story: [
      { id: "story_017", thumbnail: "https://picsum.photos/seed/s17/120/200" },
      { id: "story_018", thumbnail: "https://picsum.photos/seed/s18/120/200" },
    ],
  },
];

export default function UsersStory() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
  });

  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="w-full  py-4 relative">
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-light-gray w-12 h-12 flex items-center justify-center  rounded-full shadow cursor-pointer"
      >
        <ArrowRight />
      </button>

      <div className="embla " ref={emblaRef}>
        <div className="embla__container">
          <div
            className="embla__slide flex flex-col items-center cursor-pointer story-card w-30 h-52  overflow-hidden rounded-md"
            style={{
              backgroundImage: `url('/profile.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="  border-white/20 relative  bg-gray w-full mt-auto flex items-center justify-center h-12">
              <span className="text-3xl font-bold absolute bg-primary w-10 h-10 rounded-full flex items-center justify-center top-[-50%] ">
                +
              </span>
              <p className="story-name">Create Story</p>
            </div>
          </div>

          {storyUsers.map((user) => (
            <div
              key={user.id}
              className="embla__slide flex flex-col p-3  cursor-pointer story-card h-52 border border-white/20 w-30 rounded-md"
              style={{
                backgroundImage: user.story?.[0]?.thumbnail
                  ? `url(${user.story[0].thumbnail})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Image
                src={user.profileImage}
                alt={user.name}
                width={36}
                height={36}
                className="rounded-full object-cover border-3 border-primary "
              />
              <p className="story-name mt-auto">{user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
