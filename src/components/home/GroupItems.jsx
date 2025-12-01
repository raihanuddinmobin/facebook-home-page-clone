import Image from "next/image";
import Link from "next/link";

export default function GroupItems({ items = [], prefixLink }) {
  return items.map((item) => (
    <Link
      key={item.link}
      href={`${prefixLink}/${item.link}`}
      className="flex items-center gap-4 p-2 px-3 rounded-md hover:bg-light-gray w-full cursor-pointer font-semibold tracking-wide"
    >
      <Image
        height={30}
        width={30}
        src={item.image}
        alt={item.name}
        className="rounded-md object-cover"
      />
      <span className="text-sm">{item.name}</span>
    </Link>
  ));
}
