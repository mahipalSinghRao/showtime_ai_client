import Link from "next/link";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";

const SOCIALS = [
  {
    name: "GitHub",
    href: "#",
    icon: SiGithub,
  },
  {
    name: "Instagram",
    href: "#",
    icon: SiInstagram,
  },
];

export function FooterSocial() {
  return (
    <div className="flex items-center gap-3">
      {SOCIALS.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            aria-label={item.name}
            className="border-border hover:bg-muted rounded-xl border p-2 transition-colors"
          >
            <Icon className="size-5" />
          </Link>
        );
      })}
    </div>
  );
}
