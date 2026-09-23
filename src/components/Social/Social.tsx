import Link from "next/link";

import { SOCIAL_ITEMS } from "./social.config";

type SocialProps = {
    className?: string;
    iconClassName?: string;
};

const Social = ({
    className = "",
    iconClassName = "",
}: SocialProps) => {
    return (
        <div className={className}>
            {SOCIAL_ITEMS.map(({ id, icon: Icon, href, label }) => (
                <Link
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconClassName}
                    aria-label={label}
                >
                    <Icon />
                </Link>
            ))}
        </div>
    );
};

export default Social;
