import { FieldSet, FieldLegend, FieldDescription } from "@/components/ui/field";

interface AuthHeadersProps {
    title: string,
    description: string
}

export default function AuthHeader(
    { title, description }: AuthHeadersProps
) {
    return (
        <FieldSet className="flex flex-col !gap-y-[18px]">
            <FieldLegend className="font-afacad !text-4xl font-bold text-foreground">{title}</FieldLegend>
            <FieldDescription className="font-roboto text-foreground font-light text-lg">{description}</FieldDescription>
        </FieldSet>
    )
}