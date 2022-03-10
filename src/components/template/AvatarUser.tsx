import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

interface AvatarUSerProps {
  className?: string;
}

export default function AvatarUSer(props: AvatarUSerProps) {
  const { user } = useAuth();
  return (
    <Link href="/profile">
      <img
        src={user?.imageUrl ?? "/assets/images/avatar.svg"}
        className={`
        h-10 w-10 rounded-full cursor-pointer ring-2 ring-gray-800 dark:ring-gray-200
        ${props.className}
        `}
      />
    </Link>
  );
}
