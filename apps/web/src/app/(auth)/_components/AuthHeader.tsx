interface AuthHeadersProps {
    title: string,
    description: string
}

export default function AuthHeader(
    { title, description }: AuthHeadersProps
) {
    return (
        <div className="flex flex-col gap-y-[12px]">
            <h1 className="font-afacad text-4xl font-bold text-foreground">{title}</h1>
            <p className="font-roboto text-md text-foreground font-light">{description}</p>
        </div>
    )
}