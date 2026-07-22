import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

export function FooterLinks({ title, links }: FooterLinksProps) {
  <div className="space-y-4">
    <h3 className="text-sm font-semibold tracking-wide uppercase">{title}</h3>

    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>;
}
