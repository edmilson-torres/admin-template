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
        alt="Avatar do usuário"
        className={`
        h-10 w-10 rounded-full cursor-pointer
        ${props.className}
        `}
      />
    </Link>
  );
}
